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

    // this.signIn = new OktaSignIn({
    //   /**
    //    * Note: when using the Sign-In Widget for an ODIC flow, it still
    //    * needs to be configured with the base URL for your Okta Org. Here
    //    * we derive it from the given issuer for convenience.
    //    */
    //   baseUrl: authConfig.oidc.issuer.split('/oauth2')[0],
    //   clientId: authConfig.oidc.clientId,
    //   redirectUri: authConfig.oidc.redirectUri,
    //   logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==',
    //   i18n: {
    //     en: {
    //       'primaryauth.title': 'Sign in to Baron Wilson',
    //     },
    //   },
    //   authParams: {
    //     pkce: true,
    //     issuer: authConfig.oidc.issuer,
    //     display: 'page',
    //     scopes: authConfig.oidc.scopes,
    //   },
    // });
  }

  ngOnInit() {


  	// this.signIn.authClient.session.get().then(function (res) {
	  //   // Session exists, show logged in state.
	  //   if (res.status === 'ACTIVE') {
	  //     console.log('Welcome back, ' + res.login);

	  //     this.signIn.authClient.token.getWithoutPrompt({
	  //       scopes: ['openid', 'email', 'profile'],
	  //     }).then( (tokens) => {

	  //       tokens.forEach(token => {
	  //         if (token.idToken) {
	  //           this.signIn.authClient.tokenManager.add('idToken', token);
	  //         }
	  //         if (token.accessToken) {
	  //           this.signIn.authClient.tokenManager.add('accessToken', token);
	  //         }
	  //       });

	  //       // Say hello to the person who just signed in
	  //       this.signIn.authClient.tokenManager.get('idToken').then(idToken => {
	  //         console.log(`Hello, ${idToken.claims.name} (${idToken.claims.email})`);
	  //       });

	  //     }).catch(error => console.error(error));

	  //     return;
	  //   }
	  //   // No session, show the login form
	  //   this.signIn.renderEl(
	  //     { el: '#okta-login-container' },
	  //     function success(res) {
			//     // The properties in the response object depend on two factors:
			//     // 1. The type of authentication flow that has just completed, determined by res.status
			//     // 2. What type of token the widget is returning

			//     // The user has started the password recovery flow, and is on the confirmation
			//     // screen letting them know that an email is on the way.
			//     if (res.status === 'FORGOT_PASSWORD_EMAIL_SENT') {
			//       // Any followup action you want to take
			//       return;
			//     }

			//     // The user has started the unlock account flow, and is on the confirmation
			//     // screen letting them know that an email is on the way.
			//     if (res.status === 'UNLOCK_ACCOUNT_EMAIL_SENT') {
			//       // Any followup action you want to take
			//       return;
			//     }

			//     // The user has successfully completed the authentication flow
			//     if (res.status === 'SUCCESS') {

			//       // Handle success when the widget is not configured for OIDC

			//       if (res.type === 'SESSION_STEP_UP') {
			//         // Session step up response
			//         // If the widget is not configured for OIDC and the authentication type is SESSION_STEP_UP,
			//         // the response will contain user metadata and a stepUp object with the url of the resource
			//         // and a 'finish' function to navigate to that url
			//         console.log(res.user);
			//         console.log('Target resource url: ' + res.stepUp.url);
			//         res.stepUp.finish();
			//         return;
			//       } else {
			//         // If the widget is not configured for OIDC, the response will contain
			//         // user metadata and a sessionToken that can be converted to an Okta
			//         // session cookie:
			//         console.log(res.user);
			//         res.session.setCookieAndRedirect('https://acme.com/app');
			//         return;
			//       }


			//       // OIDC response

			//       // If the widget is configured for OIDC with a single responseType, the
			//       // response will be the token.
			//       // i.e. authParams.responseType = 'id_token':
			//       console.log(res.claims);
			//       this.signIn.authClient.tokenManager.add('my_id_token', res);

			//       // If the widget is configured for OIDC with multiple responseTypes, the
			//       // response will be an array of tokens:
			//       // i.e. authParams.responseType = ['id_token', 'token']
			//       this.signIn.authClient.tokenManager.add('my_id_token', res[0]);
			//       this.signIn.authClient.tokenManager.add('my_access_token', res[1]);

			//       return;
			//     }

			//   },
	  //     function error(err) {
	  //       // handle errors as needed
	  //       // This function is invoked with errors the widget cannot recover from:
   //  			// Known errors: CONFIG_ERROR, UNSUPPORTED_BROWSER_ERROR
	  //       console.error(err);
	  //     }
	  //   );
	  // });
  }

}
