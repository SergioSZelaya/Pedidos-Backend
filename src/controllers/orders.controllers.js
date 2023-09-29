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

export const editOrders = async (req, res) => {
  try {
    //ir a la bd y pedir los productos
    //aqui los datos deberian estar validados
    //extraer parametro ID de la ruta

    await Order.findByIdAndUpdate(req.params.idOrder, req.body);

    res.status(200).json({
      mensaje: "El pedido se editó correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "El pedido no se pudo editar",
    });
  }
};

export const eraseOrders = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.idOrder);

    res.status(200).json({
      mensaje: "El pedido se eliminó correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "El pedido no se pudo eliminar",
    });
  }
};

export const getOrders = async (req, res) => {
  try {
    const searchOrder = await Order.findById(req.params.idOrder);
    if (searchOrder == null) {
      res.status(200).json({
        mensaje: "El pedido que usted busca ya se eliminó",
      });
    } else res.status(200).json(searchOrder);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "No se pudo obtener el pedido",
    });
  }
};
