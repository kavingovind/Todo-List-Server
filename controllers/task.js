const { has } = require("lodash");
const Task = require("../models/task");

//Simple version, without validation
exports.create = function (req, res) {
  let task = new Task({
    taskName: req.body.taskName,
    taskCategory: req.body.taskCategory,
  });

  task.save(function (err) {
    if (err) {
      return next(err);
    }
    res.json({
      status: "success",
      message: "Task created successfully",
    });
  });
};

exports.update = function (req, res) {
  Task.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function (err, task) {
      if (err) return next(err);
      res.json({
        status: "success",
        message: "Task updated successfully",
      });
    }
  );
};

exports.getAll = function (req, res) {
  const q = req.query;
  const options = {};
  if (has(q, "status")) options.status = q.status;

  Task.find(options, function (err, tasks) {
    if (err) return next(err);
    res.json({ status: "success", tasks });
  });
};

exports.delete = function (req, res) {
  Task.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.json({
      status: "success",
      message: "Task deleted successfully",
    });
  });
};
