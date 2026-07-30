import { client } from "./client/client.gen";
import { BACK_URL } from "@/env";

/**
 * Global API Configuration.
 * Call this exactly ONCE when your app boots up (in main.tsx).
 *
 * To add auth interceptors, extend the `beforeRequest` hook below.
 */
export const initializeApi = () => {
  client.setConfig({
    baseUrl: BACK_URL,
  });

  // Uncomment to add auth headers on every request:
  // client.instance.interceptors.request.use((config) => {
  //   const token = getTokenFromStorage();
  //   if (token) config.headers.Authorization = `Bearer ${token}`;
  //   return config;
  // });
};
