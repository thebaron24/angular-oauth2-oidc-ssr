import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationSharedModule } from './authentication.shared.module';
import { AuthenticationService } from './authentication.service';
import { OAuthStorage } from 'angular-oauth2-oidc';
import { BrowserCookiesModule } from '@ngx-utils/cookies/browser';
import { BrowserTokenStoreService } from './browser-token-store.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   	AuthenticationSharedModule,
   	BrowserCookiesModule.forRoot()
  ],
  providers: [
    //AuthenticationService,
    {
      provide: OAuthStorage,
      useClass: BrowserTokenStoreService
    }

  ]
})
export class AuthenticationBrowserModule { }