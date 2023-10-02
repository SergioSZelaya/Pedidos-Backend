import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import productoRouter from "./src/routes/productos.routes.js";
import "./src/database/database.js";
import orderRouter from "./src/routes/orders.routes.js";
import userRouter from "./src/routes/users.routes.js";
import loginRouter from "./src/routes/usuario.routes.js";
import path from "path";
import { fileURLToPath } from "url";


const app = express();
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

app.set("port", process.env.PORT || 4001);
app.listen(app.get("port"), () => {
  console.log("Estoy en el puerto:" + app.get("port"));
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(path.join(_dirname, "/public")));

app.use("/api", productoRouter, loginRouter, orderRouter);
app.use("/api/usuario", userRouter);
