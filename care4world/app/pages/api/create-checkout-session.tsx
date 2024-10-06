import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

interface StripeWithApiVersion extends Omit<Stripe, 'apiVersion'> {
  apiVersion?: string;
}

const stripe: StripeWithApiVersion = new Stripe(
    process.env.STRIPE_SECRET_KEY as string,
    {
      apiVersion: "2022-11-15" as Stripe.StripeConfig['apiVersion'],
    }
  );

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { amount } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: { name: "Anonymous Donation" },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donate`,
    });

    res.status(200).json({ url: session.url });
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
}