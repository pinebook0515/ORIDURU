import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "oriduru",
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});
