import { Router } from "express";
import {
  createOrders,
  editOrders,
  eraseOrders,
  listOrders,
} from "../controllers/orders.controllers.js";

const router = Router();

router.route("/order").get(listOrders).post(createOrders);
router.route("/order/:idOrder").put(editOrders).delete(eraseOrders);

export default router;
