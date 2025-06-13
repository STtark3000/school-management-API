const express = require('express');
require('dotenv').config();
const schoolRoutes = require('./routes/schoolRoutes');

const app = express();
app.use(express.json());

// Optional root route
app.get('/', (req, res) => {
  res.send('School Management API ✅');

});

// API routes
app.use('/api', schoolRoutes);

const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';  // Important for Render

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
