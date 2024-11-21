import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { compare } from "bcrypt";
const connectDb = (uri) => {
  mongoose
    .connect(uri, {
      dbName: "ChattyApp",
    })
    .then(() => {
      console.log(`Database connected ${mongoose.connection.host} `);
    })
    .catch((err) => {
      throw err;
    });
};

const sendToken = (res, user, code, message) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  const cookieOptions = {
    httpOnly: true,
    maxAge: 60 * 60 * 100,
    sameSite: "none",
  };
  return res.status(code).cookie("token", token, cookieOptions).json({
    success: true,
    message,
    user,
  });
};

export { connectDb, sendToken };
