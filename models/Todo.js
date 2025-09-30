const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  task: { type: String, required: true },
  completed: { type: Boolean, default: false }, // ✅ completed status
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Todo", TodoSchema);
