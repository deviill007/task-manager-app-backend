const express = require("express");
const Task = require("../Model/taskmodel");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controller/taskcontroller");
const router = express.Router()


router.route("/").post(createTask).get(getTasks);
router.route("/:id").get(getTask).delete(deleteTask).put(updateTask);


module.exports = router;