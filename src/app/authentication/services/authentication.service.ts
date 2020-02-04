import { Injectable, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { OAuthService, OAuthEvent } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from '../authentication.config';

@Injectable()
export class AuthenticationService implements OnInit {

  private readonly _isAuthenticated = new BehaviorSubject<Boolean>(false);
  public readonly $isAuthenticated = this._isAuthenticated.asObservable();

  constructor(private router: Router, private oauthService: OAuthService) {
    console.log("AuthenticationService");

    this.configureCodeFlow();

    if(this.oauthService.hasValidAccessToken()) this._isAuthenticated.next(true);

     /**
      export type EventType =
      | 'discovery_document_loaded'
      | 'received_first_token'
      | 'jwks_load_error'
      | 'invalid_nonce_in_state'
      | 'discovery_document_load_error'
      | 'discovery_document_validation_error'
      | 'user_profile_loaded'
      | 'user_profile_load_error'
      | 'token_received'
      | 'token_error'
      | 'code_error'
      | 'token_refreshed'
      | 'token_refresh_error'
      | 'silent_refresh_error'
      | 'silently_refreshed'
      | 'silent_refresh_timeout'
      | 'token_validation_error'
      | 'token_expires'
      | 'session_changed'
      | 'session_error'
      | 'session_terminated'
      | 'logout';
     */

    this.oauthService.events.subscribe(({ type }: OAuthEvent) => {
      console.log(type);
      switch (type) {
        case 'token_received' || 'token_refreshed':
          this._isAuthenticated.next(true);
          //return this.router.navigate([path]);
          break;
        case 'logout' || 'token_expires' || 'token_error':
          this._isAuthenticated.next(false);
          break;
      }
    });
  }

  ngOnInit() {}

  login() {
    this.oauthService.initLoginFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  private configureCodeFlow() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
