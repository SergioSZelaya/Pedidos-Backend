import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import orderRouter from "./src/routes/orders.routes.js";
import "./src/database/database.js";

//1- configuraciones iniciales
const app = express();

app.set("port", process.env.PORT || 4101);
app.listen(app.get("port"), () => {
  console.log("Estoy en el puerto ..." + app.get("port"));
});

//2- configurar middlewares (funciones que permiten recibir solicitudes ext)

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//3- crear las rutas (siempre despues de los middlewares)

// http://localhost:4101/api/producto
app.use("/api", orderRouter);
