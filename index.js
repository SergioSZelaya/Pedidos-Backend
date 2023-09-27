import express, { Router } from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import orderRouter from "./src/routes/orders.routes.js";
import "./src/database/database.js";
import path from "path";

//1- configuraciones iniciales
const app = express();
//crear variable con express
app.set("port", process.env.PORT || 4101);
app.listen(app.get("port"), () => {
  console.log("Estoy en el puerto ..." + app.get("port"));
});
//2- configurar middlewares (funciones que permiten recibir solicitudes ext)

app.use(cors()); //permite conexiones remotas
app.use(express.json()); //permite que entienda la solicitud enviada al backend en formato json
app.use(express.urlencoded({ extended: true })); // le pido ayuda a express para que entienda un array o string, datos que vienen del body del request
app.use(morgan("dev")); //nos da mas informacion en la terminal

// archivo estático
//console.log(path.join(__dirname, "/public"));
//app.use(express.static());

//3- crear las rutas (siempre despues de los middlewares)
// http://localhost:4101/api/producto
app.use("/api", orderRouter);
