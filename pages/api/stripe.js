import Stripe from "stripe";

const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { cartItems } = req.body;
      const params = {
        submit_type: "pay",
        mode: "payment",
        allow_promotion_codes: true,
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [{ shipping_rate: "shr_1LjhczLNht9AvxKMQcJau3st" }],
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
        success_url: `${req.headers.origin}/?success`,
        cancel_url: `${req.headers.origin}/`,
      };
      // Create Checkout Sessions from body params.
      // console.log("this is params:", params);
      const session = await stripe.checkout.sessions.create(params);
      // res.redirect(303, session.url);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
