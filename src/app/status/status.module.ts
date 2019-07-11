import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { StatusComponent } from './status.component';
import {DataStatusDashboardComponent} from './data-status-dashboard/data-status-dashboard.component';
import {HighchartsChartModule} from 'highcharts-angular';


@NgModule({
  declarations: [
    StatusComponent,
    DataStatusDashboardComponent
  ],
  imports: [
    CommonModule,
    StatusRoutingModule,
    HighchartsChartModule
  ]
})
export class StatusModule { }
