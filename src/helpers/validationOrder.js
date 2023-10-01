import { check } from "express-validator";
import validationResult from "./validationRes.js";

const validationOrder = [
  check("user")
    .notEmpty()
    .withMessage("Es obligatorio que el campo 'user' tenga un valor válido")
    .isLength({ min: 4, max: 12 })
    .withMessage("El campo 'user' debe tener entre 4 y 12 caracteres")
    .isAlphanumeric()
    .withMessage("El campo 'user' debe contener solo caracteres alfanuméricos"),
  check("cost")
    .notEmpty()
    .withMessage("Es obligatorio que el campo 'cost' tenga un valor válido")
    .isNumeric()
    .withMessage("El campo 'cost' debe ser del tipo numérico")
    .custom((value) => {
      if (value >= 1 && value <= 1000000) {
        return true;
      } else {
        throw new Error("El campo 'cost' debe ser un valor entre 1 y 1000000");
      }
    }),
  check("date")
    .notEmpty()
    .withMessage("La fecha es obligatoria")
    .custom((value) => {
      const date = new Date(value);
      if (isNaN(date.getTime())) {
        throw new Error("La fecha debe ser una fecha válida");
      }
      return true;
    })
    .custom((value) => {
      const date = new Date(value);
      const currentDate = new Date();
      if (date > currentDate) {
        throw new Error("La fecha no puede ser en el futuro");
      }
      return true;
    }),
  check("products")
    .notEmpty()
    .withMessage("Los productos son obligatorios")
    .custom((value) => {
      const productRegex = /^[\w\s]+(,[\w\s]+)*$/;
      if (!productRegex.test(value)) {
        throw new Error(
          "El formato de 'products' debe ser 'producto1, producto2, ...'"
        );
      }
      return true;
    }),
  check("state")
    .notEmpty()
    .withMessage("El estado es obligatorio")
    .custom((value) => {
      if (value !== "Pendiente" && value !== "Realizado") {
        throw new Error("El estado debe ser 'Pendiente' o 'Realizado'");
      }
      return true;
    }),
  check("detail")
    .optional()
    .isString()
    .withMessage("El detalle debe ser una cadena de caracteres"),

  (req, res, next) => {
    validationResult(req, res, next);
  },
];

export default validationOrder;
