// import connectMongoose from "../../../lib/connectMongo";
import User from "../../../models/userModel";
import { authOptions } from "./[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import { connectMongo } from "../../../lib/connectMongoose";

const handler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  try {
    if (!session) {
      return res.status(401).json({ unauthorized: true });
    }

    await connectMongo();

    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return res
        .status(401)
        .json({ message: "No User found with this user, please try again" });
    }

    res.status(200).json({ message: "success", data: { user } });
  } catch (error) {
    console.log(error);
  }
};

export default handler;
