import pkg from "mongoose";
const { Schema, model, models } = pkg;
//import { Schema, model, models } from "mongoose";
const schema = new Schema(
  {
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "accepted", "rejected"],
    },
    sender: {
      type: Types.Schema,
      ref: "User",
      required: true,
    },
    receiver: {
      type: Types.Schema,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const User = models.User || model("User", schema);
