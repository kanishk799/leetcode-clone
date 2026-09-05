require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const { initDatabase } = require('./database');
const { seedDatabase } = require('./seed');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:3000', 'http://localhost:5000'],
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());

const frontendPath = path.join(__dirname, '..');
app.use(express.static(frontendPath));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/problems', require('./routes/problems'));
app.use('/api/submissions', require('./routes/submissions'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/discussions', require('./routes/discussions'));
app.use('/api/contests', require('./routes/contests'));
app.use('/api/ai', require('./routes/ai'));
app.use('/api/saved-code', require('./routes/savedCode'));

app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    const filePath = path.join(frontendPath, req.path);
    res.sendFile(filePath, (err) => {
      if (err) {
        res.sendFile(path.join(frontendPath, 'index.html'));
      }
    });
  }
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

async function start() {
  await initDatabase();
  seedDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Frontend served from: ${frontendPath}`);
  });
}

start().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
