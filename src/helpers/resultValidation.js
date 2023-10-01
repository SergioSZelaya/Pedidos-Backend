import { validationResult } from "express-validator";

const resultValidation = (req, res, next) => {
  const mistake = validationResult(req);
  if (!mistake.isEmpty()) {
    return res.status(400).json({
      mistakes: mistake.array(),
    });
  }
  next();
};
export default resultValidation;
