import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

export const initiateCheckout = async () => {
  console.log("checkout");
};
