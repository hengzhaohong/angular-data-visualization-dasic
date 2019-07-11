import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HighchartsChartModule } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { PriceModule } from './price/price.module';
import { StatusModule } from './status/status.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    PriceModule,
    StatusModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
