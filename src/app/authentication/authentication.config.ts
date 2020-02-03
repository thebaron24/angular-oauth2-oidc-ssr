import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'https://steyer-identity-server.azurewebsites.net/identity',

  // URL of the SPA to redirect the user to after login
  //redirectUri: window.location.origin + '/index.html',
  //redirectUri: window.location.origin,
  redirectUri: 'http://localhost:4000',
  // redirectUri: 'http://localhost:4200',

  // The SPA's id. The SPA is registered with this id at the auth-server
  clientId: 'spa-demo',

  sessionChecksEnabled: true,

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email voucher',
}

export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://demo.identityserver.io',

  // URL of the SPA to redirect the user to after login
  //redirectUri: window.location.origin + '/index.html',
  //redirectUri: window.location.origin,
  //redirectUri: 'http://localhost:4000',
  //redirectUri: 'http://localhost:4200',

  redirectUri: 'https://www.baronwilson.io/',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: 'spa',

  sessionChecksEnabled: true,

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: 'secret',

  responseType: 'code',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC. 
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  scope: 'openid profile email offline_access api',

  showDebugInformation: true,

  // Not recommented:
  // disablePKCI: true,
};

export const authFullConfig: AuthConfig = {
  /**
   * The client's id as registered with the auth server
   */
  clientId: '',

  /**
   * The client's redirectUri as registered with the auth server
   */
  redirectUri: '',

  /**
   * An optional second redirectUri where the auth server
   * redirects the user to after logging out.
   */
  postLogoutRedirectUri: '',

  /**
   * The auth server's endpoint that allows to log
   * the user in when using implicit flow.
   */
  loginUrl: '',

  /**
   * The requested scopes
   */
  scope: 'openid profile',

  resource: '',

  rngUrl: '',

  /**
   * Defines whether to use OpenId Connect during
   * implicit flow.
   */
  oidc: true,

  /**
   * Defines whether to request an access token during
   * implicit flow.
   */
  requestAccessToken: true,

  options: null,

  /**
   * The issuer's uri.
   */
  issuer: '',

  /**
   * The logout url.
   */
  logoutUrl: '',

  /**
   * Defines whether to clear the hash fragment after logging in.
   */
  clearHashAfterLogin: true,

  /**
   * Url of the token endpoint as defined by OpenId Connect and OAuth 2.
   */
  tokenEndpoint: null,

  /**
   * Url of the userinfo endpoint as defined by OpenId Connect.
   */
  userinfoEndpoint: null,

  responseType: '',

  /**
   * Defines whether additional debug information should
   * be shown at the console. Note that in certain browsers
   * the verbosity of the console needs to be explicitly set
   * to include Debug level messages.
   */
  showDebugInformation: false,

  /**
   * The redirect uri used when doing silent refresh.
   */
  silentRefreshRedirectUri: '',

  silentRefreshMessagePrefix: '',

  /**
   * Set this to true to display the iframe used for
   * silent refresh for debugging.
   */
  silentRefreshShowIFrame: false,

  /**
   * Timeout for silent refresh.
   * @internal
   * depreacted b/c of typo, see silentRefreshTimeout
   */
  siletRefreshTimeout: 1000 * 20,

  /**
   * Timeout for silent refresh.
   */
  silentRefreshTimeout: 1000 * 20,

  /**
   * Some auth servers don't allow using password flow
   * w/o a client secret while the standards do not
   * demand for it. In this case, you can set a password
   * here. As this password is exposed to the public
   * it does not bring additional security and is therefore
   * as good as using no password.
   */
  dummyClientSecret: null,

  /**
   * Defines whether https is required.
   * The default value is remoteOnly which only allows
   * http for localhost, while every other domains need
   * to be used with https.
   */
  requireHttps: 'remoteOnly',

  /**
   * Defines whether every url provided by the discovery
   * document has to start with the issuer's url.
   */
  strictDiscoveryDocumentValidation: true,

  /**
   * JSON Web Key Set (https://tools.ietf.org/html/rfc7517)
   * with keys used to validate received id_tokens.
   * This is taken out of the disovery document. Can be set manually too.
   */
  jwks: null,

  /**
   * Map with additional query parameter that are appended to
   * the request when initializing implicit flow.
   */
  customQueryParams: null,

  silentRefreshIFrameName: 'angular-oauth-oidc-silent-refresh-iframe',

  /**
   * Defines when the token_timeout event should be raised.
   * If you set this to the default value 0.75, the event
   * is triggered after 75% of the token's life time.
   */
  timeoutFactor: 0.75,

  /**
   * If true, the lib will try to check whether the user
   * is still logged in on a regular basis as described
   * in http://openid.net/specs/openid-connect-session-1_0.html#ChangeNotification
   */
  sessionChecksEnabled: false,

  /**
   * Interval in msec for checking the session
   * according to http://openid.net/specs/openid-connect-session-1_0.html#ChangeNotification
   */
  sessionCheckIntervall: 3 * 1000,

  /**
   * Url for the iframe used for session checks
   */
  sessionCheckIFrameUrl: null,

  /**
   * Name of the iframe to use for session checks
   */
  sessionCheckIFrameName: 'angular-oauth-oidc-check-session-iframe',

  /**
   * This property has been introduced to disable at_hash checks
   * and is indented for Identity Provider that does not deliver
   * an at_hash EVEN THOUGH its recommended by the OIDC specs.
   * Of course, when disabling these checks the we are bypassing
   * a security check which means we are more vulnerable.
   */
  disableAtHashCheck: false,

  /**
   * Defines wether to check the subject of a refreshed token after silent refresh.
   * Normally, it should be the same as before.
   */
  skipSubjectCheck: false,

  useIdTokenHintForSilentRefresh: false,

  /**
   * Defined whether to skip the validation of the issuer in the discovery document.
   * Normally, the discovey document's url starts with the url of the issuer.
   */
  skipIssuerCheck: false,

  /**
   * According to rfc6749 it is recommended (but not required) that the auth
   * server exposes the access_token's life time in seconds.
   * This is a fallback value for the case this value is not exposed.
   */
  //fallbackAccessTokenExpirationTimeInSec: number,

  /**
   * final state sent to issuer is built as follows:
   * state:= nonce + nonceStateSeparator + additional state
   * Default separator is ';' (encoded %3B).
   * In rare cases, this character might be forbidden or inconvenient to use by the issuer so it can be customized.
   */
  nonceStateSeparator: ';',

  /**
   * Set this to true to use HTTP BASIC auth for password flow
   */
  useHttpBasicAuth: false,

  /**
   * The window of time (in seconds) to allow the current time to deviate when validating id_token's iat and exp values.
   */
  clockSkewInSec: 600,

  /**
   * Code Flow is by defauld used together with PKCI which is also higly recommented.
   * You can disbale it here by setting this flag to true.
   * https://tools.ietf.org/html/rfc7636#section-1.1
   */
  disablePKCE: false

}
