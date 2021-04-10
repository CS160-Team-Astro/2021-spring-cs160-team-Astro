import express from 'express';

import { getUsers, createUser} from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
//router.delete('/:id', deletePost);

export default router;