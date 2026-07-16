import {getUsers, getUserById, getUserByIdDownload} from '../controllers/user.controller.js';
import express from 'express';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.get('/:id/download', getUserByIdDownload);

export default router;

