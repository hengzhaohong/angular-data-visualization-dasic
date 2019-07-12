import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import {ChartConstructorType} from './chart.model';

/**
 * Highchart 全局通用配置
 */
Highcharts.setOptions({
  global: {
    timezoneOffset: -8 * 60  // +8 时区修正方法
  },
  lang: {
    contextButtonTitle: '图表导出菜单',
    decimalPoint: '.',
    downloadJPEG: '下载JPEG图片',
    downloadPDF: '下载PDF文件',
    downloadPNG: '下载PNG文件',
    downloadSVG: '下载SVG文件',
    drillUpText: '返回 {series.name}',
    loading: '加载中',
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    noData: '没有数据',
    numericSymbols: ['千', '兆', 'G', 'T', 'P', 'E'],
    printChart: '打印图表',
    rangeSelectorFrom: '从',
    rangeSelectorTo: '到',
    resetZoom: '恢复缩放',
    resetZoomTitle: '恢复图表',
    shortMonths: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    thousandsSep: ',',
    weekdays: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天']
  }
});

/**
 * Highchart 的通用初始配置
 */
const defaultGlobalChartOptions: Highcharts.Options = {
  credits: {
    href: null
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {
      millisecond: {main: '%H:%M:%S.%L'},
      second: {main: '%H:%M:%S'},
      minute: {main: '%H:%M'},
      hour: {main: '%H:%M'},
      day: {main: '%m月%d日'},
      week: {main: '%m月%d日'},
      month: {main: '%Y年%m月'},
      year: {main: '%Y'}
    },
  },
  tooltip: {
    enabled: true,
    shared: true,
    crosshairs: [true, false],
    pointFormat: '商品价格：{point.y:,.1f} 元',
    dateTimeLabelFormats: {
      millisecond: '%A, %b %e, %H:%M:%S.%L',
      second: '%A, %b %e, %H:%M:%S',
      minute: '%A, %b %e, %H:%M',
      hour: '%A, %b %e, %H:%M',
      day: '%A, %b %e, %Y',
      week: 'Week %A, %b %e, %Y',
      month: '%B %Y',
      year: '%Y',
    },
    headerFormat: `<span style="font-size: 10px">{point.x:%Y年%m月%d日 %H:%M}</span><br/>`,
  },
  legend: {
    enabled: true
  },
  rangeSelector: {
    inputBoxWidth: 115,
    inputDateFormat: '%Y年%m月%d日',
  }
};

Highcharts.setOptions(defaultGlobalChartOptions);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() constructorType: ChartConstructorType; // optional string, defaults to 'chart'
  @Input() updateFlag: boolean;
  @Input() oneToOneFlag: boolean;
  @Input() runOutsideAngularFlag: boolean;
  @Input() callbackFunction: Highcharts.ChartCallbackFunction;
  @Input() options: Highcharts.Options;
  Highcharts = Highcharts; // required

  constructor() {
  }

  ngOnInit() {
    console.log(Highcharts.getOptions());
  }

}
