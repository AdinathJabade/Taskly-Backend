const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Todo = require("../models/Todo");

// Add Todo
router.post("/", auth, async (req, res) => {
  try {
    const todo = new Todo({ task: req.body.task, user: req.user.id });
    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get Todos
router.get("/", auth, async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete Todo
router.delete("/:id", auth, async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Toggle completed
router.put("/toggle/:id", auth, async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });

    todo.completed = !todo.completed;
    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
