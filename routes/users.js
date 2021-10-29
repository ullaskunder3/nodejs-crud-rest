import express from "express";
import { getUser, createUser, getUserDetail, deleteUser, updateUser } from "../controllers/users.js";
const router = express.Router();

router.get('/', getUser);

router.post('/', createUser)

router.get('/:id', getUserDetail)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router;