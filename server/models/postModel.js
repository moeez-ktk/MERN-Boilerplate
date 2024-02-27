const mongoose = require('mongoose');

// Define the schema for the Post model
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create and export the Post model
module.exports = mongoose.model('Post', postSchema);
