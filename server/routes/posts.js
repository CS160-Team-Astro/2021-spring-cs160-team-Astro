import express from 'express';

import { getPosts, createPost, updatePost, likePost, deletePost, getTop50, getAllPosts } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/top50', getTop50);
router.get('/allsongs', getAllPosts)
router.post('/', createPost);
router.delete('/:id', deletePost);
router.patch('/:id', updatePost);
router.patch('/:id/likePost', likePost)

export default router;