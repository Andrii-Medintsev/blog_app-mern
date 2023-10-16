const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const verifyToken = require('../verifyToken');

//create
router.post('/create', verifyToken, async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (error) {
    res.status(500).json(error);
  }
})

//update
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const updateComment = await Comment.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(updateComment);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json('Comment has been deleted!');
  } catch (error) {
    res.status(500).json(error);
  }
});

//get post comments
router.get('/post/:postId', async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
