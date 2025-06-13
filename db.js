const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect(err => {
  if (err) {
    console.error('DB Connection Error:', err);
    return process.exit(1);
  }
  console.log('✅ MySQL Connected via InfinityFree!');
});

module.exports = db;
