const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// GET all posts
router.get("/", postController.getAllPosts);

// Create a new post
router.post("/", postController.createPost);

// GET a specific post by ID
router.get("/:id", postController.getPostById);

// Update a specific post by ID
router.put("/:id", postController.updatePostById);

// Delete a specific post by ID
router.delete("/:id", postController.deletePostById);

module.exports = router;
