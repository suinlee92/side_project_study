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
  connection.query('SELECT * from todolist_master', (error, rows) => {
    console.log('id/pw: ', rows);
    res.send(rows);
  });
});

router.post('/todo', function (req, res) {
  connection.query('INSERT INTO todolist_master SET ?', (error, rows) => {
    console.log('INSERT!!', rows);
    return res.json(req.body);
  });
});

// router.post('/insert', function (req, res) {
//   console.log(req.body);
//   const todo = [];
//   todo.push({
//     MASTER_CONTENTS: req.body.MASTER_CONTENTS,
//     TODOLIST_STATUS: req.body.TODOLIST_STATUS,
//     USER_ID: req.body.USER_ID,
//   });
//   // return res.send(req.body);
//   return res.json(req.body);
// });

router.post('/todo', async (req, res) => {
  let dbconnection = await connection.dbconnection('post');
  let newTodo = req.body;
  let result = await dbconnection.insertOne(newTodo);
  res.send(result).status(204);
});
module.exports = router;
