import { createClient } from "microcms-js-sdk";

export const microCMSClient = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN ?? "",
  apiKey: process.env.API_KEY ?? "",
});