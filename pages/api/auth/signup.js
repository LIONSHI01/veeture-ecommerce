import connectMongoose from "../../../lib/connectMongo";
import User from "../../../models/userModel";
import { hashPassword } from "../../../lib/hashPassword";
import { connectMongo } from "../../../lib/connectMongoose";

const handler = async (req, res) => {
  if (req.method !== "POST") return;
  try {
    const { name, email, password } = req.body;

    await connectMongo();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(401).json({
        status: "failed",
        message: "This email already registered as user.",
      });
      return;
    }

    if (email.length === 0 || password.length === 0) {
      res.status(401).json({
        status: "failed",
        message: "Email and Password are required, please try again.",
      });
      return;
    }

    if (password.length < 7) {
      res.status(401).json({
        status: "failed",
        message: "Password length should be more than 6 characters.",
      });
      return;
    }

    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    if (newUser) {
      res.status(201).json({
        status: "success",
        message: "Register successful.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Some error happened, please try again later.",
    });
  }
};

export default handler;
