const mysql = require('../config/mysql');

let Todo = function (todo) {
  this.todoMasterId = todo.todoMasterId;
  this.masterContents = todo.masterContents;
  this.todoListStatus = todo.todoListStatus;
  this.createDate = todo.createDate;
  this.updateDate = todo.updateDate;
  this.userId = todo.userId;
};

Todo.findAll = function (result) {
  mysql.query('select*from todolist_master', function (err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      console.log('todos : ', res);
      result(null, res);
    }
  });
};
req = function (err, req) {
  console.log('controller');
  if (err) res.send(err);
  console.log('res', req);
  res.send(req);
};

// Todo.findById = function(req) {
//     console.log(req, "id result !!!!!!!!!!!")
//     mysql.query("select*from todolist_master where TODOLIST_MASTER_ID = " + id, function(err, res) {
//         if(err) {
//             console.log("error: ", err);
//             result(null, err);
//         }else {
//             console.log("todos : ", res);
//             result(null, res);
//         }
//     });
// }

// 특정 사용자 검색
Todo.findById = function (id, result) {
  mysql.query(
    'Select * from todolist_master where TODOLIST_MASTER_ID = ?',
    id,
    function (err, res) {
      if (err) {
        console.log('error: ', err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Todo;
