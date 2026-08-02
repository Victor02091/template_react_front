declare global {
  interface Window {
    _env_: {
      BACKEND_URL: string;
      OIDC_AUTHORITY: string;
      OIDC_CLIENT_ID: string;
      OIDC_REDIRECT_URI: string;
    };
  }
}

export const BACK_URL = window._env_.BACKEND_URL;
export const OIDC_AUTHORITY = window._env_.OIDC_AUTHORITY;
export const OIDC_CLIENT_ID = window._env_.OIDC_CLIENT_ID;
export const OIDC_REDIRECT_URI = window._env_.OIDC_REDIRECT_URI;
