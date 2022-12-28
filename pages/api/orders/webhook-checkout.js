import User from "../../../models/userModel";
import Order from "../../../models/orderModel";
import { connectMongo } from "../../../lib/connectMongoose";
import Stripe from "stripe";

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

const createBookingCheckout = async (session) => {
  const orderItems = session.line_items;
  const email = session.customer_email;

  try {
    await connectMongo();
    const user = await User.find({ email });
    await Order.create({ user: user.id, items: orderItems });
    console.log({ orderItems, user });
  } catch (err) {
    console.log(err.message);
  }
};

const handler = async (req, res) => {
  const signature = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      process.env.NEXT_PUBLIC_STRIPE_WEB_HOOK_SECRET
    );
  } catch (err) {
    console.log(err);
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  if (event.type === "checkout.session.complete")
    createBookingCheckout(event.data.object);

  res.status(200).json({ received: true });
};

export default handler;
