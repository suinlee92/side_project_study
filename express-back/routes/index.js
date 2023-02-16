// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

var express = require('express');
var router = express.Router();

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

connection.connect();

/* GET home page. */
router.get('/', function (req, res, next) {
  connection.query('SELECT * from Users', (error, rows) => {
    console.log('id/pw: ', rows);
    res.send(rows);
  });
});

module.exports = router;
