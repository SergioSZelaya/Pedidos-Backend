import { Router } from "express";
import {
  createOrders,
  editOrders,
  eraseOrders,
  getOrders,
  listOrders,
} from "../controllers/orders.controllers.js";
import { check } from "express-validator";
import validationOrder from "../helpers/validationOrder.js";

const router = Router();

router.route("/order").get(listOrders).post(validationOrder, createOrders);
router
  .route("/order/:idOrder")
  .put(validationOrder, editOrders)
  .delete(eraseOrders)
  .get(getOrders);

export default router;