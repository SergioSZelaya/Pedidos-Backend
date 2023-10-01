import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  nameProduct: {
    type: String,
    required: true,
    unique: true,
    minLength: 2,
    maxLength: 50,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
    max: 10000,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);
export default Product;
