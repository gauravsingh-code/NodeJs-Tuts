import {getUsers, getUserById, getUserByIdDownload} from '../controllers/user.controller.js';
import express from 'express';
import { asyncHandler } from '../middlewares/asyncHandler.js';

const router = express.Router();

router.get('/', asyncHandler(getUsers));
router.get('/:id', getUserById);
router.get('/:id/download', getUserByIdDownload);


export default router;

