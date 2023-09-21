//aqui van las rutas que se deben unir con el index y se trabajan en conjunto con los controllers. POr ejemplo:

import { Router } from "express";
import {
  createProducts,
  deleteProducts,
  editProducts,
  obtainProducts,
  tolistProducts,
} from "../controllers/products.controllers.js";

const router = Router();

router.route("/product").get(tolistProducts).post(createProducts);
router
  .route("/product/:id")
  .put(editProducts)
  .delete(deleteProducts)
  .get(obtainProducts);
export default router;
