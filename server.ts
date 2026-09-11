import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = 3000;

// Security headers middleware
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  // Allow iframe embedding within AI Studio preview while protecting elsewhere
  next();
});

// JSON body parser with size limit
app.use(express.json({ limit: '50kb' }));

// Simple in-memory rate limiting map: IP -> timestamp list
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10; // 10 quote requests per minute per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
  
  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }
  
  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return true;
}

// Clean up stale rate limits every 5 minutes
const cleanupInterval = setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of rateLimitMap.entries()) {
    const valid = timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
    if (valid.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      rateLimitMap.set(ip, valid);
    }
  }
}, 5 * 60 * 1000);
cleanupInterval.unref();

// API Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Sahel Voyages API',
    location: 'Sousse, Tunisia',
    timestamp: new Date().toISOString(),
  });
});

// Helper sanitization
function sanitize(input: unknown): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/<[^>]*>?/gm, '')
    .trim()
    .slice(0, 500);
}

// Quote Request API with rate limiting & sanitization
app.post('/api/quote', (req, res) => {
  const clientIp = req.ip || req.socket.remoteAddress || 'unknown';

  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({
      error: 'Too many requests. Please try again later.',
    });
  }

  const {
    name,
    fullName,
    email,
    phone,
    preferredLanguage,
    destination,
    departureLocation,
    preferredTour,
    travelType,
    tourType,
    numberOfTravelers,
    preferredDates,
    preferredDate,
    message,
  } = req.body;

  // Validation
  const cleanName = sanitize(name || fullName);
  const cleanEmail = sanitize(email);
  const cleanPhone = sanitize(phone);
  const cleanDestination = sanitize(preferredTour || destination || departureLocation);
  const cleanDates = sanitize(preferredDate || preferredDates);
  const cleanMessage = sanitize(message);

  if (!cleanName || cleanName.length < 2) {
    return res.status(400).json({ error: 'Valid name is required.' });
  }

  if (!cleanEmail || !cleanEmail.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required.' });
  }

  if (!cleanPhone || cleanPhone.length < 5) {
    return res.status(400).json({ error: 'Valid phone number is required.' });
  }

  const quoteRecord = {
    id: 'REQ-' + Date.now().toString(36).toUpperCase(),
    name: cleanName,
    email: cleanEmail,
    phone: cleanPhone,
    preferredLanguage: preferredLanguage || 'fr',
    destination: cleanDestination || 'Tunisie générale',
    travelType: travelType || tourType || 'Group / Safari',
    departureLocation: departureLocation || 'Sousse',
    numberOfTravelers: Number(numberOfTravelers) || 2,
    preferredDates: cleanDates,
    message: cleanMessage,
    receivedAt: new Date().toISOString(),
    status: 'pending_agent_review',
  };

  console.log('[Sahel Voyages Inquiry Received]:', quoteRecord);

  return res.status(200).json({
    success: true,
    message: 'Votre demande de devis a été reçue par notre équipe à Sousse.',
    referenceId: quoteRecord.id,
  });
});

// Static files from public folder (e.g. google verification, sitemap, robots.txt)
const publicDir = path.resolve(process.cwd(), 'public');
if (fs.existsSync(publicDir)) {
  app.use(express.static(publicDir));
}

// Explicit handler for Google site verification files
app.get('/google:code.html', (req, res, next) => {
  const fileName = `google${req.params.code}.html`;
  const candidates = [
    path.resolve(process.cwd(), 'public', fileName),
    path.resolve(process.cwd(), 'dist', fileName),
    path.resolve(__dirname, fileName),
  ];
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return res.sendFile(candidate);
    }
  }
  if (req.params.code === '8946342eb8e9d708') {
    return res.type('text/html').send(`google-site-verification: google8946342eb8e9d708.html\n`);
  }
  next();
});

// Vite middleware for dev / static for prod
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // When running bundled server from dist/server.cjs, __dirname is already dist/
    const distPath = fs.existsSync(path.join(__dirname, 'index.html'))
      ? __dirname
      : path.resolve(process.cwd(), 'dist');

    app.use(express.static(distPath));
    app.get('*', (req, res, next) => {
      res.sendFile(path.join(distPath, 'index.html'), (err) => {
        if (err) {
          next(err);
        }
      });
    });
  }

  // Primary listener on port 3000 (required by AI Studio dev proxy)
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Sahel Voyages server running on http://0.0.0.0:${PORT}`);
  });

  // In production deployments (e.g. standalone Cloud Run), also listen on Cloud Run's $PORT if different
  if (
    process.env.NODE_ENV === 'production' &&
    process.env.PORT &&
    process.env.PORT !== String(PORT)
  ) {
    const cloudRunPort = parseInt(process.env.PORT, 10);
    if (!isNaN(cloudRunPort)) {
      try {
        app.listen(cloudRunPort, '0.0.0.0', () => {
          console.log(`Sahel Voyages server also listening on Cloud Run port ${cloudRunPort}`);
        });
      } catch (err) {
        console.warn('Could not bind secondary Cloud Run port:', err);
      }
    }
  }
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
