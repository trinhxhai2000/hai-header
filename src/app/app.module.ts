import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HaiPageHeaderComponent } from './hai-page-header/hai-page-header.component';
import { HaiPageHeader2Component } from './hai-page-header2/hai-page-header2.component';
import { HaiSwitchComponent } from './hai-switch/hai-switch.component';
import { FormsModule } from '@angular/forms';
import { HuyenCbbComponent } from './huyen-cbb/huyen-cbb.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { TinhCbbComponent } from './tinh-cbb/tinh-cbb.component';

@NgModule({
  declarations: [
    AppComponent,
    HaiPageHeaderComponent,
    HaiPageHeader2Component,
    HaiSwitchComponent,
    HuyenCbbComponent,
    TinhCbbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
