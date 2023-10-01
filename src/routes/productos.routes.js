//aqui van las rutas que se deben unir con el index y se trabajan en conjunto con los controllers. POr ejemplo:

import { Router } from "express";
import {
  createProducts,
  deleteProducts,
  editProducts,
  obtainProducts,
  tolistProducts,
} from "../controllers/products.controllers.js";
import { check } from "express-validator";

const router = Router();

router
  .route("/product")
  .get(tolistProducts)
  .post(
    [
      check("nameProduct")
        .notEmpty()
        .withMessage("El nombre del producto es un dato obligatorio")
        .isLength({
          min: 2,
          max: 50,
        })
        .withMessage(
          "EL nombre del producto debe tener entre 2 y 5 caracteres"
        ),
      check("price")
        .notEmpty()
        .withMessage("el precio es un dato obligatorio")
        .isNumeric()
        .withMessage("El precio debe ser un numero")
        .custom((value) => {
          if (value >= 1 && value <= 10000) {
            return true;
          } else {
            throw new Error("el precio debe estar entre 1 y 10000");
          }
        }),
      check("image")
        .notEmpty()
        .withMessage("la imagen es un dato obligatorio")
        .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
        .withMessage("Debe ingresar una url de una imagen valida"),
    ],
    createProducts
  );
router
  .route("/product/:id")
  .put(editProducts)
  .delete(deleteProducts)
  .get(obtainProducts);
export default router;
