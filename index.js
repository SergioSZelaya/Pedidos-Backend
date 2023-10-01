import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import productoRouter from "./src/routes/productos.routes.js"; //esto se cambia (productoRouter)porque hay que crear ruta y controlador para usuarios
import orderRouter from "./src/routes/orders.routes.js";
import "./src/database/databaseMauro.js";
import userRouter from "./src/routes/users.routes.js";
import path from "path";
import { fileURLToPath } from "url";

console.log("funciona, mi back va bien");
//1- configuraciones iniciales
const app = express();
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

//crear variable con express
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("Estoy en el puerto ..." + app.get("port"));
});
//2- configurar middlewares (funciones que permiten recibir solicitudes ext)

app.use(cors()); //permite conexiones remotas
app.use(express.json()); //permite que entienda la solicitud enviada al backend en formato json
app.use(express.urlencoded({ extended: true })); // le pido ayuda a express para que entienda un array o string, datos que vienen del body del request
app.use(morgan("dev")); //nos da mas informacion en la terminal
//agregar archivo estatico
      app.use(
  express.static(
    path.join(_dirname, '/public')));
//3- crear las rutas (siempre despues de los middlewares)
// http://localhost:4000/api/producto
app.use("/api", productoRouter); //esto se cambia porque hay que crear ruta y controlador para usuarios
app.use("/api", orderRouter);
app.use("/api/usuario", userRouter);
