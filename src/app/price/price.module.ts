import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceRoutingModule } from './price-routing.module';
import { PriceComponent } from './price.component';
import {PriceDashboardComponent} from './price-dashboard/price-dashboard.component';
import {ControlBarComponent} from './control-bar/control-bar.component';
import {ControlItemComponent} from './control-item/control-item.component';
import {HighchartsChartModule} from 'highcharts-angular';


@NgModule({
  declarations: [
    PriceComponent,
    PriceDashboardComponent,
    ControlBarComponent,
    ControlItemComponent
  ],
  imports: [
    CommonModule,
    PriceRoutingModule,
    HighchartsChartModule
  ]
})
export class PriceModule { }
