const express = require('express');
require('dotenv').config();
const schoolRoutes = require('./routes/schoolRoutes');

const app = express();

// Render sets this environment variable internally
const port = process.env.PORT || 10000;

// Bind explicitly to 0.0.0.0 to comply with Render requirements
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is live at http://0.0.0.0:${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello from Render-deployed Express server!');
});