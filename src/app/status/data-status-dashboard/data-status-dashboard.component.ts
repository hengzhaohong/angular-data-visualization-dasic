import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts/highstock';

const genTestData: (startWith?: number, count?: number) => number[] = (startWith = 52, count = 5000) => {
  const testData: number[] = [];
  for (let i = 0 ; i < count; i++) {
    if (i === 0) {
      testData.push(startWith);
    } else {
      testData.push(testData[i - 1] + (Math.random() - 0.5) * startWith * 0.2);
    }
  }
  return testData;
};

@Component({
  selector: 'app-data-status-dashboard',
  templateUrl: './data-status-dashboard.component.html',
  styleUrls: ['./data-status-dashboard.component.scss']
})
export class DataStatusDashboardComponent implements OnInit {
  title = 'ompFn';
  Highcharts = Highcharts; // required
  chartConstructor = 'stockChart'; // optional string, defaults to 'chart'
  chartOptions = {
    title: {
      text: '每日数据量趋势'
    },
    series: [
      {
        type: 'column',
        data: genTestData(10, 50)
      },
      {
        type: 'line',
        data: genTestData(10, 50)
      },
    ],
    credits: {
      text: '数据来源：模拟项目数据库'
    }
  }; // required
  updateFlag = false; // optional boolean
  oneToOneFlag = true; // optional boolean, defaults to false
  runOutsideAngularFlag = false;
  chartCallBack: any;
  // chartCallback = function (chart) { ... } // optional function, defaults to null
  // optional boolean, defaults to false

  constructor() { }

  ngOnInit() {
  }

}
