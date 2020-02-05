import { Injectable, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  OAuthService,
  OAuthEvent,
  OAuthErrorEvent,
  OAuthSuccessEvent,
  OAuthInfoEvent,
  UserInfo
} from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from '../authentication.config';

@Injectable()
export class AuthenticationService implements OnInit, OnDestroy {

  private subscriptions: any = {};

  private readonly _user = new BehaviorSubject<UserInfo>(null);
  public readonly $user = this._user.asObservable();

  private readonly _isAuthenticated = new BehaviorSubject<Boolean>(false);
  public readonly $isAuthenticated = this._isAuthenticated.asObservable();

  constructor(private router: Router, private oauthService: OAuthService) {
    console.log("AuthenticationService");

    this.configureCodeFlow();

    this._isAuthenticated.next(this.oauthService.hasValidAccessToken());
    
    this.subscriptions.oauthEvents = this.oauthService.events.subscribe(event => { 
      
      this._isAuthenticated.next(this.oauthService.hasValidAccessToken());

      if(event instanceof OAuthErrorEvent){
        console.error(event);
        if(['session_terminated', 'session_error'].includes(event.type)){
          this.router.navigate(['/login']);
        }
      } else if (event instanceof OAuthSuccessEvent) {
        //console.warn(event)
        if(['token_received'].includes(event.type)){
          this.oauthService.loadUserProfile().then((userInfo: UserInfo) => {
            // console.log(userInfo);
            this._user.next(userInfo);
          });
        }
      } else if (event instanceof OAuthInfoEvent) {
        console.info(event);
        // if(['discovery_document_loaded'].includes(event.type) && event.info && this.oauthService.hasValidAccessToken()){
        //   this.oauthService.initCodeFlow();
        // }
      }
    });


  }

  ngOnInit() {}

  ngOnDestroy() {
    Object.keys(this.subscriptions).forEach(key => this.subscriptions[key].unsubscribe());
  }

  login() {
    this.oauthService.initCodeFlow();
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
