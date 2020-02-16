import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {
  OAuthModule,
  OAuthStorage,
  OAuthResourceServerErrorHandler,
  OAuthNoopResourceServerErrorHandler
} from 'angular-oauth2-oidc';

import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuard } from './services/authentication.guard';
import { TokenInterceptor } from './services/token.interceptor';
import { resourceConfig } from './authentication.config';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    OAuthModule.forRoot(resourceConfig)
  ],
  exports: [
    HttpClientModule,
    OAuthModule
  ],
  providers: [
    {
      provide: OAuthResourceServerErrorHandler,
      useClass: OAuthNoopResourceServerErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
   ]
})
export class AuthenticationSharedModule { }