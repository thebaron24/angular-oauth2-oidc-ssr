import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  OAuthModule,
  OAuthStorage,
  OAuthResourceServerErrorHandler,
  OAuthNoopResourceServerErrorHandler
} from 'angular-oauth2-oidc';
import { MaterialModule } from '../material/material.module';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuard } from './authentication.guard';
import { TokenInterceptor } from './token.interceptor';
import { resourceConfig } from './authentication.config';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    OAuthModule.forRoot(resourceConfig)
  ],
  exports: [
    HttpClientModule,
    MaterialModule,
    OAuthModule
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
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