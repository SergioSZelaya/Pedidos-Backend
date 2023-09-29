import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  nickname: {
    type: String,
    required: true,
    unique: true,
    minLength: 2,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 6,
    maxLength: 150,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 200,
  },
  rol: {
    type: String,
    required: true,
  },
  state: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.model("user", userSchema);

export default User;
