import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import {ChartConstructorType} from '../../chart/chart.model';

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
 * 生产随机游走的时间序列数据
 * @param startWith 初始状态
 * @param count 序列长度
 */
const genTestData: (startWith?: number, count?: number) => Array<number[]> = (startWith = 520, count = 5000) => {
  const testData: Array<number[]> = [];
  const startTimestamp = new Date().getTime() - count * 60 * 60 * 24 * 1000;
  for (let i = 0; i < count; i++) {
    if (i === 0) {
      testData.push([startTimestamp, startWith]);
    } else {
      testData.push([
        testData[i - 1][0] + 60 * 60 * 24 * 1000,
        testData[i - 1][1] + getNumberInNormalDistribution(0, 1)
      ]);
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
  chartConstructor: ChartConstructorType = 'stockChart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {
    title: {
      text: '随机游走的商品价格趋势'
    },
    series: [
      {
        type: 'line',
        data: genTestData(35)
      },
      {
        type: 'line',
        data: genTestData(65)
      }
    ],
    credits: {
      text: '数据来源：模拟的随机游走价格数据'
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
