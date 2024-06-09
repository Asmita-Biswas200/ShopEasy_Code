import { registration, loginUser } from '../controllers/authController.js';
import express from 'express';

const authRoutes = express.Router();

//Registration
authRoutes.post('/register', registration);

//login
authRoutes.post('/login', loginUser);


export default authRoutes;
