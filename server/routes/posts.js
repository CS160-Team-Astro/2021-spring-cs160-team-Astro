import express from 'express';

import { getPosts, createPost, updatePost, likePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.patch('/:id/likePost', likePost)

export default router;