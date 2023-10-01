import { Router } from "express";
import { login } from "../controllers/login.controllers.js";

const router = Router();

router.route('/login').post(login);

export default router;