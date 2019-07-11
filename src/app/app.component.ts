import { Component } from '@angular/core';

import * as Highcharts from 'highcharts';

const genTestData = () => {
  const testData: number[] = [];
  const y0 = 52;
  for (let i = 0 ; i < 5000; i++) {
    if (i === 0) {
      testData.push(y0);
    } else {
      testData.push(testData[i - 1] + (Math.random() - 0.5) * 5);
    }
  }
  return testData;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ompFn';
  Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  chartOptions = {
    series: [{ data: genTestData() }]
  }; // required
  updateFlag = false; // optional boolean
  oneToOneFlag = true; // optional boolean, defaults to false
  runOutsideAngularFlag = false;
  chartCallBack: any;
  // chartCallback = function (chart) { ... } // optional function, defaults to null
  // optional boolean, defaults to false
}
