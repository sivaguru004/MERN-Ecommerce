import express from 'express'
import { registerUser } from '../controller/userController.mjs';

const router = express.Router();

// creating user
router.route('/register').post(registerUser)


export default router