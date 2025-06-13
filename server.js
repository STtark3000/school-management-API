const express = require('express');
require('dotenv').config();
const schoolRoutes = require('./routes/schoolRoutes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('School Management API ✅'));
app.use('/api', schoolRoutes);

// Web server binding
const WEB_PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';

app.listen(WEB_PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${WEB_PORT}`);
});
