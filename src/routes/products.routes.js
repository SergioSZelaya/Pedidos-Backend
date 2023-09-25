//aqui van las rutas que se deben unir con el index y se trabajan en conjunto con los controllers. POr ejemplo:

import { Router } from "express";
import { listProduct } from "../controllers/products.controllers.js";

const router = Router();
//de momento solo recibe solicitudes get
router.route("/product").get(listProduct);

export default router;
