import express from 'express';
import { createUser, getUsers, getUser, patchUser, deleteUser } from '../controllers/users.js';

const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUser);
router.patch('/:id', patchUser);
router.delete('/:id', deleteUser);

export default router;
