import express from "express";

console.log("funciona, mi back va bien");
//1- configuraciones iniciales
const app = express();
//crear variable con express
app.set("port", process.env.PORT || 4000);
//2- configurar middlewares (permite recibir solicitudes ext)

//3- crear las rutas (siempre despues de los middlewares)
