
//const { CLIENT_ID, ISSUER, OKTA_TESTING_DISABLEHTTPSCHECK } = process.env;



const config = {
  issuer: 'https://dev-116925.okta.com/oauth2/default',
  // redirectUri: 'https://localhost:4200/implicit/callback',
  redirectUri: 'https://www.baronwilson.io/implicit/callback',
  clientId: '0oa2ct7r6ojPq3paK357',
  pkce: true
}

export default {
  oidc: {
    clientId: config.clientId,
    issuer: config.issuer,
    redirectUri: config.redirectUri,
    scopes: ['openid', 'profile', 'email']//,
    // testing: {
    //   disableHttpsCheck: true
    // }
  },
  resourceServer: {
    messagesUrl: 'http://localhost:4200/api/messages',
  },
};


