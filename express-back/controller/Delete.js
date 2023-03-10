const Todo = require("../model/todo");

exports.delete = function(req, res) {
  console.log(req.params.id,'del controller')
  Todo.delete(function (err, req) {
    if(err) res.send(err);
    res.send({ message: "successfully deleted!!!"});
  }, req.params.id );
};

