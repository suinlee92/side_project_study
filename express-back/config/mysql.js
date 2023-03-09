const mysql = require("mysql");

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '1234',
  database: 'study',
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("DB Connected!");
});

module.exports = connection;