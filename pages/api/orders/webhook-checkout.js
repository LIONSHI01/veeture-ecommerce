import User from "../../../models/userModel";
import Order from "../../../models/orderModel";
import { connectMongo } from "../../../lib/connectMongoose";
import Stripe from "stripe";
import { buffer } from "micro";

// Turn off Next.js default bodyParser for Strip stream raw data
export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

const createBookingCheckout = async (session) => {
  // const email = session.customer_email;
  console.log("Updating Order data...");

  try {
    await connectMongo();
    // const user = await User.find({ email });

    // await Order.create({
    //   user: "63ab9840847af02d19f2efbf",
    //   stripeOrderId: session.id,
    //   paymentValue: session.amount_total,
    // });

    await Order.findOneAndUpdate(
      { stripeOrderId: session.id },
      {
        paid: true,
        paymentValue: session.amount_total,
      },
      { new: true }
    );
  } catch (err) {
    console.log(err.message);
  }
};

const handler = async (req, res) => {
  // Get signature from Stripe
  const signature = req.headers["stripe-signature"];

  const buff = await buffer(req);

  let event;
  console.log("received Stripe data");
  try {
    event = stripe.webhooks.constructEvent(
      buff,
      signature,
      process.env.NEXT_PUBLIC_STRIPE_WEB_HOOK_SECRET
    );
  } catch (err) {
    console.log(err.message);
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed")
    createBookingCheckout(event.data.object);

  console.log("Created Order on My side");
  console.log("Send 200 to Stripe");

  res.status(200).json({ received: true, sessionID: event.data.object.id });
};

export default handler;
