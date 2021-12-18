const express = require("express");
const router = express.Router();

// Require the controllers.
const Task = require("../controllers/task");

// Create new task
router.post("/create", Task.create);

// Update exisiting task by Id
router.put("/update/:id", Task.update);

// Get all tasks
router.get("/", Task.getAll);

// Delete a task by Id
router.delete("/delete/:id", Task.delete);

module.exports = router;
