import {Component, OnInit} from '@angular/core';

import * as Highcharts from 'highcharts';

/**
 * 产生一个服从指定正态分布的随机数
 * @param mean 正态分布的均值
 * @param stdDev 正态分布的标准差
 */
function getNumberInNormalDistribution(mean, stdDev) {
  return mean + (uniform2NormalDistribution() * stdDev);
}

/**
 * 产生一个服从标准正态分布的随机数
 */
function uniform2NormalDistribution() {
  let sum = 0.0;
  for (let i = 0; i < 12; i++) {
    sum = sum + Math.random();
  }
  return sum - 6.0;
}

/**
 * 循环调用时，生产随机游走序列
 * @param startWith 初始状态
 */
const genTestData: (x?: number) => number[] = (startWith = 520) => {
  const testData: number[] = [];
  for (let i = 0; i < 5000; i++) {
    if (i === 0) {
      testData.push(startWith);
    } else {
      testData.push(testData[i - 1] + getNumberInNormalDistribution(0, 1));
    }
  }
  return testData;
};

@Component({
  selector: 'app-price-dashboard',
  templateUrl: './price-dashboard.component.html',
  styleUrls: ['./price-dashboard.component.scss']
})
export class PriceDashboardComponent implements OnInit {
  title = 'ompFn';
  Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  chartOptions = {
    title: {
      text: '随机游走的商品价格趋势'
    },
    series: [
      {
        data: genTestData(35)
      },
      {
        data: genTestData(65)
      }
    ],
    credits: {
      text: '数据来源：随机游走模型模拟'
    }
  }; // required
  updateFlag = false; // optional boolean
  oneToOneFlag = true; // optional boolean, defaults to false
  runOutsideAngularFlag = false;
  chartCallBack: any;
  // chartCallback = function (chart) { ... } // optional function, defaults to null
  // optional boolean, defaults to false

  constructor() {
  }

  ngOnInit() {
  }

}
