import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceRoutingModule } from './price-routing.module';
import { PriceComponent } from './price.component';
import {PriceDashboardComponent} from './price-dashboard/price-dashboard.component';
import {ControlBarComponent} from './control-bar/control-bar.component';
import {ControlItemComponent} from './control-item/control-item.component';


@NgModule({
  declarations: [
    PriceComponent,
    PriceDashboardComponent,
    ControlBarComponent,
    ControlItemComponent
  ],
  imports: [
    CommonModule,
    PriceRoutingModule
  ]
})
export class PriceModule { }
