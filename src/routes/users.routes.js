import { Router } from "express";
import { createUser, listUsers } from "../controllers/users.controllers.js";
import validationUser from "../helpers/validationUser.js";

const router = Router();

router.route("/").get(listUsers);
router.route("/crear").post(validationUser, createUser);

export default router;
