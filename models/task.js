const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TaskSchema = new Schema(
  {
    taskName: {
      type: String,
      required: true,
    },
    taskCategory: {
      type: String,
      required: true,
      default: "Default",
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

// Export the model
module.exports = mongoose.model("Task", TaskSchema);
