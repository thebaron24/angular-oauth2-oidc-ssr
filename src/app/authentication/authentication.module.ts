import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material/material.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

import authConfig from './authentication.config';

import {
  OKTA_CONFIG,
  OktaAuthModule
} from '@okta/okta-angular';

const oktaConfig = Object.assign({
  onAuthRequired: ({oktaAuth, router}) => {
    // Redirect the user to your custom login page
    router.navigate(['/login']);
  }
}, authConfig.oidc);

@NgModule({
  declarations: [LoginComponent, ProfileComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    AuthenticationRoutingModule,
    // OktaAuthModule
    OktaAuthModule
  ],
  providers: [
  	{ provide: OKTA_CONFIG, useValue: oktaConfig }
  ]
})
export class AuthenticationModule { }
