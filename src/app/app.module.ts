import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminModule } from './admin/admin.module';
import { ConsumerModule } from './consumer/consumer.module';
import { MerchantModule } from "./merchant/merchant.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    AdminModule,
    ConsumerModule,
    MerchantModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
