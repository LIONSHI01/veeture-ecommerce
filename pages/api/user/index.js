import User from "../../../models/userModel";
import Order from "../../../models/orderModel";
import { connectMongo } from "../../../lib/connectMongoose";

// FOR TESTING USER MODEL
const handler = async (req, res) => {
  try {
    await connectMongo();

    const user = await User.findOne({ email: req.body.email }).populate({
      path: "orders",
      model: Order,
    });

    res.status(200).json({
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

export default handler;
