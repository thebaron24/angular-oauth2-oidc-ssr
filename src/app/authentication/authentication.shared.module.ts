import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { OAuthStorage } from "angular-oauth2-oidc";
import { MaterialModule } from '../material/material.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationService } from './authentication.service';
import { HttpService } from './http.service';
import { TokenInterceptor } from './token.interceptor';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [LoginComponent, ProfileComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    AuthenticationRoutingModule,
    OAuthModule.forRoot()
  ],
  exports: [
    HttpClientModule,
    MaterialModule,
    AuthenticationRoutingModule,
    OAuthModule
  ],
  providers: [
    HttpService,
    AuthenticationService,
    // AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
   ]
})
export class AuthenticationSharedModule { }