import mongoose, { model, models } from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    value: {
      type: Number,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    items: [{}],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Order = models.User || model("Order", orderSchema);
export default Order;
