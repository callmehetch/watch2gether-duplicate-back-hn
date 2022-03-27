const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  commentID: { type: Number, required: true },
  commentText: { type: String, required: true },  
});

const Comment = mongoose.model("commentData", commentSchema);

module.exports = Comment;