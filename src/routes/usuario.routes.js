import { Router } from "express";
import { login } from "../controllers/usuario.controllers";

const router = Router();

router.route('/').post(login);

export default router;