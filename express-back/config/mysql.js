/* mysql setting */
const mysql = require('mysql');
// const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'zm*9195145',
  database: 'mediation_server',
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('DB Connected!');
});

module.exports = connection;
