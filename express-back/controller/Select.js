// var express = require('express');
// var router = express.Router();

// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: '3306',
//   user: 'root',
//   password: '1234',
//   database: 'study',
// });

// connection.connect();

// /* GET home page. */
// router.get('/todos', function (req, res, next) {
//     var sql = 'select * from todolist_master'
//     connection.query(sql, (error, result) => {
//     console.log('result ', result);
//     // res.send(rows);
//   });
// });

// module.exports = router;

const Todo = require("../model/todo");

exports.findAll = function(req, res) {
  Todo.findAll(function (err, todo) {
    console.log("controller");
    if(err) res.send(err);
    console.log("res", todo);
    res.send(todo);
  });
};

// exports.findById = function(req, res) {
//   console.log(req.params.id,'req res select controller')
//   Todo.findById(function (err, req) {
//     console.log("controller");
//     if(err) res.send(err);
//     console.log("res", req);
//     res.send(req);
//   });
// };
