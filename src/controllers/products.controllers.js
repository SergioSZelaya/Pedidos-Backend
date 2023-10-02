import Product from "../models/product.js";

export const tolistProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "error al listar productos",
    });
  }
};

export const createProducts = async (req, res) => {
  console.log(req.body);
  try {
    const productNew = new Product(req.body);

    await productNew.save();
    res.status(201).json({
      mensaje: "El producto fue creado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "El producto no fue creado correctamente",
    });
  }
};

export const editProducts = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    const productsNew = new Product(req.body);

    res.status(200).json({
      mensaje: "El producto fue editado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "El producto no se edito",
    });
  }
};

export const deleteProducts = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      mensaje: "El producto fue eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "El producto no se pudo eliminar",
    });
  }
};

export const obtainProducts = async (req, res) => {
  try {
    const productSought = await Product.findById(req.params.id);

    res.status(200).json(productSought);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "no pude obtener el producto",
    });
  }
};
