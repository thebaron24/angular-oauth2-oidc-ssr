import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { OAuthStorage } from "angular-oauth2-oidc";
import { MaterialModule } from '../material/material.module';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuard } from './authentication.guard';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    OAuthModule.forRoot()
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
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
   ]
})
export class AuthenticationSharedModule { }