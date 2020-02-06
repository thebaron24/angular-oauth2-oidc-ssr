import { Injectable, Inject, OnInit, OnDestroy } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
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
import { CookiesService } from '@ngx-utils/cookies';

@Injectable()
export class AuthenticationService implements OnInit, OnDestroy {

  private subscriptions: any = {};

  private configMap: any = {
    demo: authCodeFlowConfig
  }

  private readonly _user = new BehaviorSubject<UserInfo>(null);
  public readonly $user = this._user.asObservable();

  private readonly _isAuthenticated = new BehaviorSubject<Boolean>(false);
  public readonly $isAuthenticated = this._isAuthenticated.asObservable();

  constructor(
    private router: Router,
    private oauthService: OAuthService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cookieService: CookiesService) {
    console.log("AuthenticationService");


    if (isPlatformBrowser(this.platformId)) {
      // Client only code.
      let storedConfig = this.cookieService.get('config');

      if(storedConfig) {
        this.configureCodeFlow(this.configMap[storedConfig]);
        //this.cookieService.remove(storedConfig);
      }
    }
    

    this._isAuthenticated.next(this.oauthService.hasValidAccessToken());
    
    this.subscriptions.oauthEvents = this.oauthService.events.subscribe(event => { 
      
      this._isAuthenticated.next(this.oauthService.hasValidAccessToken());

      if(event instanceof OAuthErrorEvent){
        console.error(event);
        if(['session_terminated', 'session_error'].includes(event.type)){
          this.router.navigate(['login']);
        }
      } else if (event instanceof OAuthSuccessEvent) {
        //console.warn(event)
        if(['token_received'].includes(event.type)){
          this.getUserInfo();
        }
      } else if (event instanceof OAuthInfoEvent) {
        console.info(event);
        // if(['discovery_document_loaded'].includes(event.type) && event.info && this.oauthService.hasValidAccessToken()){
        //   this.oauthService.initCodeFlow();
        // }
      }
    });

  }

  ngOnInit() {

    if (isPlatformBrowser(this.platformId)) {
      // Client only code.
    }
    if (isPlatformServer(this.platformId)) {
      // Server only code.
    }  
  }

  ngOnDestroy() {
    Object.keys(this.subscriptions).forEach(key => this.subscriptions[key].unsubscribe());
  }

  login(config) {

    if (isPlatformBrowser(this.platformId)) {
      // Client only code.
      this.cookieService.put('config', config);
    }
    
    this.configureCodeFlow(this.configMap[config]);

  }

  logout() {
    this.cookieService.remove('config');
    this.oauthService.logOut();
  }

  private getUserInfo(){
    this.oauthService.loadUserProfile().then((userInfo: UserInfo) => {
      // console.log(userInfo);
      this._user.next(userInfo);
    });
  }

  private configureCodeFlow(authConfig) {

    this.oauthService.configure(authConfig);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(
      (value) => {
        if(this.oauthService.hasValidAccessToken()){
          this.getUserInfo();
        } else {
          console.log("in else");
          this.oauthService.initCodeFlow();
        }
      },
      () => {

      }
    );
  }
}
