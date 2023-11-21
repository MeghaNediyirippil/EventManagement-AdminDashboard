import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  HighCharts=Highcharts
  chartOptions={}

  constructor(){
    this.chartOptions={
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'Augest, 20233',
      align: 'left'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
      }
  },
  series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: 'Marriage',
          y: 70.67,
          sliced: true,
          selected: true
      }, {
          name: 'Birthday',
          y: 14.77
      },  {
          name: 'Inauguration',
          y: 4.86
      }, {
          name: 'Groom Tobe',
          y: 2.63
      }, {
          name: 'Haldhi',
          y: 1.53
      },  {
          name: 'Mehandi Night',
          y: 1.40
      }, {
          name: 'Gulabi',
          y: 0.84
      }, {
          name: 'Mon Tobe',
          y: 0.51
      }, {
          name: 'Other',
          y: 2.6
      }]
  }]
  }
}
}
