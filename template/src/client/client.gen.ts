/**
 * PLACEHOLDER FILE
 *
 * This file exists so the template compiles successfully out-of-the-box.
 * It will be completely overwritten the first time you run:
 * `npm run generate-api`
 */

export const client = {
  setConfig: (..._args: unknown[]) => {
    console.warn(
      "⚠️ API Client not generated yet! Run `npm run generate-api` to connect to your backend.",
    );
  },
  // Stubbing the fetch-based interceptors so the app doesn't crash on boot
  interceptors: {
    request: {
      use: (..._args: unknown[]) => {},
      eject: (..._args: unknown[]) => {},
    },
    response: {
      use: (..._args: unknown[]) => {},
      eject: (..._args: unknown[]) => {},
    },
  },
};
