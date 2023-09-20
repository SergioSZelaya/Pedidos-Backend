import Usuario from "../models/usuario.js";
import bcrypt from 'bcrypt';

export const login = async (req, res) => {
    try {
      //verificar si existe un mail como el recibido
      const { email, password } = req.body;
  
      //verificar si el email ya existe
      //email = req.body.email
      let usuario = await Usuario.findOne({ email });
      if (!usuario) {
        //si el usuario existe
        return res.status(400).json({
          mensaje: "Correo o password invalido - correo",
        });
      }
      const passwordValido = bcrypt.compareSync(password, usuario.password);
    if(!passwordValido){
       return res.status(400).json({mensaje:'Correo o password invalido- password'})
    }

    //responder que el usuario es correcto
    res.status(200).json({
      mensaje: "El usuario existe",
      uid: usuario._id,
      nombre: usuario.nombreUsuario,
    });
    } catch (error) {
        console.log(error);
        res.status(400).json({
          mensaje: "usuario o contraseña invalido",
        });
      }}