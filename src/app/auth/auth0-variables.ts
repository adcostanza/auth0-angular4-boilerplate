interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'J_8C-ub0cXavWEKSoGXuwTMow0wX8mTf',
  domain: 'colfax.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
