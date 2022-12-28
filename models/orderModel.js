import mongoose, { model, models } from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    value: {
      type: Number,
    },
    stripeOrderId: {
      type: String,
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

const Order = models.Order || model("Order", orderSchema);
export default Order;
