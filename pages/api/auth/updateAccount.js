import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./[...nextauth]";

import connectMongoose from "../../../lib/connectMongo";
import User from "../../../models/userModel";

const handler = async (req, res) => {
  // console.log(req);
  const session = await unstable_getServerSession(req, res, authOptions);
  const { wishlist } = req.body;
  // console.log(wishlist);

  // console.log(session);

  try {
    if (!session) {
      return res.status(401).json({ unauthorized: true });
    }

    if (req.method !== "PATCH") {
      return res.status(401).json({ message: "Not the right fetching method" });
    }

    await connectMongoose();
    // Check if User exist
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "No User found with this user, please login again" });
    }

    // Update user profile
    await User.findByIdAndUpdate(
      user._id,
      { wishlist: wishlist },
      { new: true }
    );

    return res.status(200).json({ message: "Updated successfully" });
  } catch (error) {
    console.log(error);
  }
};

export default handler;
