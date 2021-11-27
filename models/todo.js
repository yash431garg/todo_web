const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  todos: [
    {
      checked: Boolean,
      text: String,
      id: String,
    },
  ],
});
module.exports = mongoose.model("todo", todoSchema);
