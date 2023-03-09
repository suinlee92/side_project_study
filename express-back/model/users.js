const mysql = require('../config/mysql');

let Todo = function (todo) {
  this.MASTER_CONTENTS = todo.MASTER_CONTENTS;
  this.TODOLIST_STATUS = todo.TODOLIST_STATUS;
  this.USER_ID = todo.USER_ID;
  // this.user_password = todo.user_password;
};
