import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import orderRouter from "./src/routes/orders.routes.js";
import "./src/database/database.js";
import path from "path";
import { fileURLToPath } from "url";

//1- configuraciones iniciales
const app = express();
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("Estoy en el puerto " + app.get("port"));
});

//2- configurar middlewares (funciones que permiten recibir solicitudes ext)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//agregar archivo estatico

//console.log(path.join('C:/Users/sergi/RollingCode/Proyecto Final/Pedidos-Backend-dev' ,'/public')
      app.use(
  express.static(
    path.join(_dirname, '/public')));

//3- crear las rutas (siempre despues de los middlewares)

// http://localhost:4000/api/producto
app.use("/api", orderRouter);
