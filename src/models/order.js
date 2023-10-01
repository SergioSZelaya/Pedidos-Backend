import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
  user: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 12,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  products: {
    type: String,
    required: true,
    validate: {
      validator: function (products) {
        return /^[\w\s]+(,[\w\s]+)*$/.test(products);
      },
      message: "El formato de productos debe ser 'producto1, producto2, ...'.",
    },
  },
  cost: {
    type: Number,
    required: true,
    min: 1,
    max: 1000000,
  },

  state: {
    type: String,
    required: true,
    enum: ["Pendiente", "Realizado"],
  },

  detail: {
    type: String,
  },
});

const Order = mongoose.model("order", orderSchema);

export default Order;