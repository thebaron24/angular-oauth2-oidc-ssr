import { Component, OnInit } from '@angular/core';
import OktaSignIn from '@okta/okta-signin-widget';
import authConfig from '../authentication.config';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signIn: any;
  constructor() {
    this.signIn = new OktaSignIn({
      /**
       * Note: when using the Sign-In Widget for an ODIC flow, it still
       * needs to be configured with the base URL for your Okta Org. Here
       * we derive it from the given issuer for convenience.
       */
      baseUrl: authConfig.oidc.issuer.split('/oauth2')[0],
      clientId: authConfig.oidc.clientId,
      redirectUri: authConfig.oidc.redirectUri,
      // logo: '/assets/angular.svg',
      i18n: {
        en: {
          'primaryauth.title': 'Sign in',
        },
      },
      authParams: {
        pkce: true,
        issuer: authConfig.oidc.issuer,
        display: 'page',
        scopes: authConfig.oidc.scopes,
      },
    });
  }

  ngOnInit() {
  	this.signIn.remove();
    this.signIn.renderEl(
      { el: '#sign-in-widget' },
      () => {
        /**
         * In this flow, the success handler will not be called because we redirect
         * to the Okta org for the authentication workflow.
         */
      },
      (err) => {
        throw err;
      },
    );
  }

}
