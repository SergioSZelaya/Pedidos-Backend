import Product from "../models/product";

export const tolistProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "error when listing products",
    });
  }
};

export const createProducts = async (req, res) => {
  console.log(req.body);
  try {
    const productNew = new Product(req.body);

    await productNew.save();
    res.status(201).json({
      mensaje: "the product was created correctly",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "the product was not created correctly",
    });
  }
};

export const editProducts = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    const productsNew = new Product(req.body);

    res.status(200).json({
      mensaje: "the product was edited correctly",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "cannot edit the product",
    });
  }
};

export const deleteProducts = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      mensaje: "the product was disposed of correctly",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "cannot delete the product",
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
      mensaje: "could not get the product",
    });
  }
};
