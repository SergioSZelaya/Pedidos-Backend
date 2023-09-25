//aqui van las rutas que se deben unir con el index y se trabajan en conjunto con los controllers. POr ejemplo:

import { Router } from "express";
import { listUser } from "../controllers/users.controllers.js";

const router = Router();
//de momento solo recibe solicitudes get
router.route("/users").get(listUser);

export default router;
