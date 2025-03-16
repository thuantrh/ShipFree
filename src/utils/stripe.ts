import { type Stripe, loadStripe } from "@stripe/stripe-js";  

let stripePromise: Promise<Stripe | null>;  

export const getStripe = () => {  
  if (!stripePromise) {  
    // Kiểm tra key trước khi khởi tạo  
    if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {  
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);  
    } else {  
      console.warn("Stripe publishable key is not configured");  
      stripePromise = Promise.resolve(null);  
    }  
  }  
  return stripePromise;  
};  

// Khởi tạo Stripe server-side có điều kiện  
let serverStripe: any = null;  

if (!process.env.SKIP_STRIPE_INTEGRATION && process.env.STRIPE_SECRET_KEY) {  
  try {  
    serverStripe = require("stripe")(process.env.STRIPE_SECRET_KEY);  
  } catch (error) {  
    console.error("Failed to initialize Stripe:", error);  
  }  
}  

export const stripe = serverStripe;