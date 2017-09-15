interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'your-id',
  domain: 'your-domian',
  callbackURL: 'your-callback-url'
};
