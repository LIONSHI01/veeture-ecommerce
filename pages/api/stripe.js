import Stripe from "stripe";

import { createOrder } from "../../lib/apiRequest/orderRequest";

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
    return;
  }

  try {
    const { cartItems, email, userId } = req.body;

    const params = {
      submit_type: "pay",
      mode: "payment",
      allow_promotion_codes: true,
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [{ shipping_rate: "shr_1LjhczLNht9AvxKMQcJau3st" }],
      customer_email: email,
      line_items: cartItems.map((item) => {
        const productName = item.selectedSize
          ? `${item.title}-${item.selectedSize}`
          : item.title;
        const img = item.images[0].asset._ref;
        const newImage = img
          .replace(
            "image-",
            "https://cdn.sanity.io/images/qhawkln0/production/"
          )
          .replace("-jpg", ".jpg");

        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: productName,
              images: [newImage],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/`,
    };

    const session = await stripe.checkout.sessions.create(params);

    // Create Order on DB, then validate payment from Stripe's POST request to veeture.lionshi.io endpoint
    await createOrder(userId, session.id, cartItems);

    res.status(200).json(session);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
}
