/**
 * PLACEHOLDER FILE
 * 
 * This file exists so the template compiles successfully out-of-the-box.
 * It will be completely overwritten the first time you run:
 * `npm run generate-api`
 */

export const client = {
  setConfig: (_: any) => {
    console.warn("⚠️ API Client not generated yet! Run `npm run generate-api` to connect to your backend.");
  },
  // Stubbing the instance for interceptors in case they are uncommented
  instance: {
    interceptors: {
      request: {
        use: () => {}
      }
    }
  }
};