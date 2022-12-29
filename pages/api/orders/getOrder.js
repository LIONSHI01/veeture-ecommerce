import Order from "../../../models/orderModel";
import { connectMongo } from "../../../lib/connectMongoose";

// FOR TESTING ORDER MODEL
const handler = async (req, res) => {
  const { user } = req.body;
  try {
    await connectMongo();
    const orders = await Order.find({ user });

    res.status(201).json({
      data: {
        orders,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Something wrong with API: ${error.message}`,
    });
  }
};

export default handler;
