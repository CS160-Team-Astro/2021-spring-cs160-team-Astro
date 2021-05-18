import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/users.js";

router.post("/signin", signin);
router.post("/signup", signup);

import { getUsers, createUser, deleteUser} from '../controllers/users.js';


router.get('/', getUsers);
router.post('/', createUser);
router.delete('/:id', deleteUser);

export default router;