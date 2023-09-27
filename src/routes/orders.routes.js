import { Router } from "express";
import { createOrders, listOrders } from "../controllers/orders.controllers.js";

const router = Router();

router.route("/order").get(listOrders).post(createOrders);
router.route("/producto/:id").put();
export default router;
