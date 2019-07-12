import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceRoutingModule } from './price-routing.module';
import { PriceComponent } from './price.component';
import {PriceDashboardComponent} from './price-dashboard/price-dashboard.component';
import {ChartModule} from '../chart/chart.module';


@NgModule({
  declarations: [
    PriceComponent,
    PriceDashboardComponent
  ],
  imports: [
    CommonModule,
    PriceRoutingModule,
    ChartModule
  ]
})
export class PriceModule { }
