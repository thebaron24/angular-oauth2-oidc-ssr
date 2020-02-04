import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationSharedModule } from './authentication.shared.module';
import { OAuthStorage } from "angular-oauth2-oidc";
import { ServerTokenStoreService } from './services/server-token-store.service';
import { ServerCookiesModule } from '@ngx-utils/cookies/server';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticationSharedModule,
    ServerCookiesModule.forRoot()
  ],
  providers: [
    {
        provide: OAuthStorage,
        useClass: ServerTokenStoreService
    }
  ]
})

export class AuthenticationServerModule { }