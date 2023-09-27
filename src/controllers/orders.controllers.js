import { json } from "express";
import Order from "../models/order.js";

export const listOrders = async (req, res) => {
  try {
    //ir a la bd y pedir los productos
    const orderList = await Order.find();
    res.status(200).json(orderList);
  } catch (error) {
    console.log(error);
    res.status(404),
      json({
        mensaje: "Error al buscar el pedido",
      });
  }
};

export const createOrders = async (req, res) => {
  try {
    //ir a la bd y pedir los productos
    //aqui los datos deberian estar validados
    console.log(req.body);
    const newOrder = new Order(req.body);
    //guardar el pedido nuevo en la BD
    await newOrder.save();
    res.status(201).json({
      mensaje: "El pedido se creó correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "El pedido no pudo crearse, revisar",
    });
  }
};
