import pkg from "mongoose";
const { Schema, model, models } = pkg;
//import { Schema, model, models } from "mongoose";
const schema = new Schema(
  {
    content: string,
    attachments: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],

    sender: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    chat: {
      type: Types.ObjectId,
      ref: "Chat",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const Message = models.Message || model("Message", schema);