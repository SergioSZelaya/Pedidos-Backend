// Este database esta solo para hacer las pruebas de las solicitudes de usuarios ya que la que venia en el repo estaba vacio 🤷‍♂️
// Borrar si es necesario

import mongoose from "mongoose";
import "dotenv/config";

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI);

const ConnectionData = mongoose.connection;

ConnectionData.once("open", () => {
  console.log("BD conectada");
});
