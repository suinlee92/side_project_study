const express = require("express");
const router = express.Router();

const Select = require("../controller/Select");
const DeleteTodo = require("../controller/delete");

router.get("/todolist", Select.findAll);
router.get("/:id", Select.findById);
router.delete("/:id", DeleteTodo.delete);
// 같은 url주소를 사용해도 Request Method 타입을 지정해주면 알아서 찾아감

module.exports = router;