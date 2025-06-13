const express = require('express');
require('dotenv').config();
const schoolRoutes = require('./routes/schoolRoutes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('School Management API is live!'));
app.use('/api', schoolRoutes);

// 🔥 Critical section:
const port = parseInt(process.env.PORT, 10) || 5000;
const host = '0.0.0.0'; // Must be literal this string

app.listen(port, host, () => {
  console.log(`Listening on http://${host}:${port}`);
});
