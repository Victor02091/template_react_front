declare global {
  interface Window {
    _env_: {
      BACKEND_URL: string;
    };
  }
}

export const BACK_URL = window._env_?.BACKEND_URL || "http://localhost:8000";
