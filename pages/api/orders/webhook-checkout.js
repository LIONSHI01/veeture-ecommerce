import User from "../../../models/userModel";
import Order from "../../../models/orderModel";
import { connectMongo } from "../../../lib/connectMongoose";
import Stripe from "stripe";
import { buffer } from "micro";

// Turn off Next.js default bodyParser
export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

const createBookingCheckout = async (session) => {
  // const orderItems = session.line_items;
  const email = session.customer_email;

  try {
    await connectMongo();
    const user = await User.find({ email });

    console.log({ orderItems, user });
    await Order.create({ user: user._id, stripeOrderId: session.id });
  } catch (err) {
    console.log(err.message);
  }
};

const handler = async (req, res) => {
  // Get signature from Stripe
  const signature = req.headers["stripe-signature"];

  const buff = await buffer(req);

  let event;
  console.log("This is Webhook endpoint...");
  console.log("This is signature:", signature);
  try {
    event = stripe.webhooks.constructEvent(
      buff,
      signature,
      process.env.NEXT_PUBLIC_STRIPE_WEB_HOOK_SECRET
    );
  } catch (err) {
    console.log(err);
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed")
    createBookingCheckout(event.data.object);

  res.status(200).json({ received: true });
};

export default handler;
