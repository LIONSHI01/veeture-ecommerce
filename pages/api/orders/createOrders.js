import Order from "../../../models/orderModel";
import { connectMongo } from "../../../lib/connectMongoose";

// For Testing
const handler = async (req, res) => {
  if (req.method !== "POST") return;

  const { user, stripeId } = req.body;
  try {
    await connectMongo();
    await Order.create({ user, stripeId });
    res.status(201).json({ message: "Order created." });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Something wrong with API: ${error.message}`,
    });
  }
};

export default handler;
