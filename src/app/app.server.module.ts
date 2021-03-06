import { NgModule, Inject } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { MaterialModule } from './material/material.module';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { AuthenticationServerModule } from './authentication/authentication.server.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UniversalInterceptor } from './universal.interceptor';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import { Request, Response } from 'express';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    ModuleMapLoaderModule,
    MaterialModule,
    FlexLayoutServerModule,
    AuthenticationServerModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UniversalInterceptor,
      multi: true
    }
  ]
})
export class AppServerModule {}
