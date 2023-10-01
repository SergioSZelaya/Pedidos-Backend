import { check } from "express-validator";
import resultValidation from "./validationResult.js";

const validationUser = [
  check("nickname")
    .notEmpty()
    .withMessage("El nickname es un dato obligatorio.")
    .isLength({ min: 2, max: 20 })
    .withMessage("El nickname debe de tener entre 2 y 20 caracteres."),

  check("email")
    .notEmpty()
    .withMessage("El email es un dato obligatorio.")
    .isLength({ min: 6, max: 150 })
    .withMessage("El email debe de tener entre 6 y 150 caracteres.")
    .matches(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/i)
    .withMessage("El email no cumple con un formato valido."),

  check("password")
    .notEmpty()
    .withMessage("La contraseña es un dato obligatorio")
    .isLength({ min: 8, max: 18 })
    .withMessage("La contraseña debe de tener entre 8 y 18 caracteres.")
    .matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S+$/)
    .withMessage(
      "La contraseña debe tener al menos un dígito, al menos una minúscula y al menos una mayúscula."
    ),

  check("rol")
    .notEmpty()
    .withMessage("El rol es un dato obligatorio")
    .isIn(["usuario", "administrador"])
    .withMessage("Debe de ingresar un rol valida"),

  //Al final de todos los check llamamos al archivo de resultado de validaciones
  (req, res, next) => {
    resultValidation(req, res, next);
  },
];

export default validationUser;
