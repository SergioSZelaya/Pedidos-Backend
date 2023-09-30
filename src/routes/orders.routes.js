import { Router } from "express";
import {
  createOrders,
  editOrders,
  eraseOrders,
  getOrders,
  listOrders,
} from "../controllers/orders.controllers.js";
import { check } from "express-validator";

const router = Router();

router
  .route("/order")
  .get(listOrders)
  .post(
    [check("user").notEmpty().withMessage("Es obligatorio tener un usuario")],
    createOrders
  );
router
  .route("/order/:idOrder")
  .put(editOrders)
  .delete(eraseOrders)
  .get(getOrders);

export default router;
