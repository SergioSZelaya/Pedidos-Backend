import { check } from "express-validator";
import resultValidation from "./resultValidation.js";

const validationProduct = [
  check("nameProduct")
    .notEmpty()
    .withMessage("El nombre del producto es un dato obligatorio")
    .isLength({
      min: 2,
      max: 50,
    })
    .withMessage("EL nombre del producto debe tener entre 2 y 5 caracteres"),
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
  check("category")
    .notEmpty()
    .withMessage("La categoria es un dato obligatorio")
    .isIn(["sandwiches", "pizzas", "picadas", "bebidas"])
    .withMessage("Debe ingresar una categoria valida"),

  (req, res, next) => {
    resultValidation(req, res, next);
  },
];

export default validationProduct;
