import User from "../models/user.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        mensaje: "Correo o password invalido",
      });
    }
    const passwordValido = bcrypt.compareSync(password, user.password);
    if (!passwordValido) {
      return res.status(400).json({ mensaje: "correo o Password invalido" });
    }
    res.status(200).json({
      mensaje: "El usuario existe",
      uid: user._id,
      nombre: user.nickname,
      rol: user.rol,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "usuario o contraseña no valido",
    });
  }
};
