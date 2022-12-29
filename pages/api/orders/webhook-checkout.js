import Stripe from "stripe";
import { buffer } from "micro";

import { updateBookingCheckout } from "../../../lib/apiRequest/orderRequest";

// !!Turn off Next.js default bodyParser for Strip stream raw data
export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

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
    return res
      .status(err.statusCode || 400)
      .send(`Webhook error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed")
    updateBookingCheckout(event.data.object);

  console.log("Created Order on My side");
  console.log("Send 200 to Stripe");

  res.status(200).json({ received: true, sessionID: event.data.object.id });
};

export default handler;
