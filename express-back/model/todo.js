const mysql = require("../config/mysql");

let Todo = function (todo) {
    this.todoMasterId = todo.todoMasterId;
    this.masterContents = todo.masterContents;
    this.todoListStatus = todo.todoListStatus;
    this.createDate = todo.createDate;
    this.updateDate = todo.updateDate;
    this.userId = todo.userId;
};

Todo.findAll = function(result) {
    mysql.query("select*from todolist_master", function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else {
            console.log("todos : ", res);
            result(null, res);
        }
    });
};

Todo.findById = function(result, id) {
    mysql.query("select * from todolist_master where TODOLIST_MASTER_ID = " + id, function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else {
            console.log("todos : ", res);
            result(null, res);
        }
    });
}

Todo.delete = function (result,id) {
    mysql.query("delete from todolist_master where TODOLIST_MASTER_ID = " + id, function(err, res){
        if(err) {
            console.log('"error:', err);
            result(null, err);
        } else {
            console.log('delete:', res);
            result(null, res)
        }

    })
}

module.exports = Todo;