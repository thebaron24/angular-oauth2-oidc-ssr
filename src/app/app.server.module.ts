import { NgModule, Inject } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { MaterialModule } from './material/material.module';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationServerModule } from './authentication/authentication.server.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UniversalInterceptor } from './universal.interceptor';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

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
  // providers: [{
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: UniversalInterceptor,
  //   multi: true
  // }]
})
export class AppServerModule {}
