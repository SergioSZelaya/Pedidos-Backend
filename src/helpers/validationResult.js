import { validationResult } from "express-validator";

const resultValidation = (req, res, next) => {
  // Trabajar los datos de la validacion
  const errors = validationResult(req);

  // errors.isEmpty() true: si esta todo okay, false: si hay errores
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  next();
};

export default resultValidation;
