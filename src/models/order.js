import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
  user: {
    type: { type: String },
    required: true,
    unique: true,
    minLength: 4,
    maxLength: 12,
  },
  date: {
    type: { type: Date, default: Date.now },
    required: true,
  },
  menuProducts: {
    type: { type: String },
    required: true,
    validate: {
      validator: function (products) {
        // Esta función verifica si la cadena contiene productos separados por comas.
        // La expresión regular /^[\w\s]+(,[\w\s]+)*$/ verifica el formato.
        return /^[\w\s]+(,[\w\s]+)*$/.test(products);
      },
      message: "El formato de productos debe ser 'producto1, producto2, ...'.",
      // El mensaje de error que se mostrará si la validación falla.
    },
  },
  cost: {
    type: { type: Number },
    required: true,
  },
  state: {
    type: { type: String },
    required: true,
  },
});

const Order = mongoose.model("order", orderSchema);
