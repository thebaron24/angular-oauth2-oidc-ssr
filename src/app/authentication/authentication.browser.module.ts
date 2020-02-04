import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationSharedModule } from './authentication.shared.module';
import { OAuthStorage } from 'angular-oauth2-oidc';
import { BrowserCookiesModule } from '@ngx-utils/cookies/browser';
import { BrowserTokenStoreService } from './services/browser-token-store.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   	AuthenticationSharedModule,
   	BrowserCookiesModule.forRoot()
  ],
  providers: [
    {
      provide: OAuthStorage,
      useClass: BrowserTokenStoreService
    }
  ]
})
export class AuthenticationBrowserModule { }