import express from 'express';
import { getUsers, getUserById, saveUser } from '../controllers/UserController.js';

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', saveUser);

export default router;
