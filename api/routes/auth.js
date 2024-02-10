import express from 'express';
import { login, register, registerAdmin } from '../controllers/auth.controller.js';


const router = express.Router();

router.post("/register",register)
router.post("/login", login)
router.post("/register-admin", registerAdmin)


export default router;