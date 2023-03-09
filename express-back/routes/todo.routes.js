const express = require("express");
const router = express.Router();

const Select = require("../controller/Select");

router.get("/todolist", Select.findAll);
router.get("/todolist/:id", Select.findById);

module.exports = router;