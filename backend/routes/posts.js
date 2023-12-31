const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const verifyToken = require('../verifyToken');

//create
router.post('/create', verifyToken, async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
})

//update
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const updatePost = await Post.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(updatePost);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    await Comment.deleteMany({postId: req.params.id });
    res.status(200).json('Post has been deleted!');
  } catch (error) {
    res.status(500).json(error);
  }
});

//get post details
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
