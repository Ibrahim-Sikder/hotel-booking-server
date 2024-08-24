import  { model, Schema } from "mongoose";
import { TRoom } from "./rooms.interface";


const RoomSchema = new Schema<TRoom>(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
  },
  { timestamps: true }
);

export const Room = model<TRoom> ("Room",RoomSchema)