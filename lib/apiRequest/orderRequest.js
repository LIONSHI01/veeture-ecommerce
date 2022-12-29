import Order from "../../models/orderModel";
import { connectMongo } from "../connectMongoose";

export const updateBookingCheckout = async (session) => {
  // const email = session.customer_email;
  console.log("Updating Order data...");

  try {
    await connectMongo();

    await Order.findOneAndUpdate(
      { stripeOrderId: session.id },
      {
        paid: true,
        paymentValue: +session.amount_total / 100,
      },
      { new: true }
    );
  } catch (err) {
    console.log(err.message);
  }
};

export const createOrder = async (userId, sessionId, items) => {
  try {
    await connectMongo();

    await Order.create({
      user: userId,
      stripeOrderId: sessionId,
      orderItems: items,
    });
  } catch (err) {
    console.log(err.message);
  }
};
