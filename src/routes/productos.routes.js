import { Router } from "express";
import {
  createProducts,
  deleteProducts,
  editProducts,
  obtainProducts,
  tolistProducts,
} from "../controllers/products.controllers.js";
import validationProduct from "../helpers/validationProduct.js";

const router = Router();

router
  .route("/product")
  .get(tolistProducts)
  .post(validationProduct, createProducts);
router
  .route("/product/:id")
  .put(validationProduct, editProducts)
  .delete(deleteProducts)
  .get(obtainProducts);
export default router;
