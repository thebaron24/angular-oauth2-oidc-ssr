import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    TransferHttpCacheModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
