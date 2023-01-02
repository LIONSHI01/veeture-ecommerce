import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./[...nextauth]";

import connectMongoose from "../../../lib/connectMongo";
import User from "../../../models/userModel";
import { connectMongo } from "../../../lib/connectMongoose";

const handler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  try {
    if (!session) {
      return res.status(401).json({ unauthorized: true });
    }

    if (req.method !== "PATCH") {
      return res.status(401).json({ message: "Not the right fetching method" });
    }

    await connectMongo();
    // Check if User exist
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "No User found with this user, please login again" });
    }

    // Update user profile
    if (req.body.dataType === "wishlist") {
      const wishlist = req.body.updateData;
      await User.findByIdAndUpdate(user._id, { wishlist }, { new: true });
    }

    if (req.body.dataType === "cartList") {
      const cartList = req.body.updateData;
      await User.findByIdAndUpdate(user._id, { cartList }, { new: true });
    }

    if (req.body.dataType === "address") {
      const address = req.body.updateData;

      await User.findByIdAndUpdate(user._id, { address }, { new: true });
    }

    return res.status(200).json({ message: "Updated successfully" });
  } catch (error) {
    console.log(error);
  }
};

export default handler;
