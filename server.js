// server.js
const express = require('express');
const dotenv = require('dotenv');
const schoolRoutes = require('./routes/schoolRoutes');

dotenv.config();

const app = express();

app.use(express.json());

// 🟢 Add this RIGHT HERE, before your /api routes:
app.get('/', (req, res) => {
  res.send('🎯 School Management API is up and running! Use /api endpoints.');
});

// Your existing /api routes
app.use('/api', schoolRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
