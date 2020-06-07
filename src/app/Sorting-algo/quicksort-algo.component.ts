import { logging } from 'protractor';
import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'src/app/canvasjs.min.js';

@Component({
  selector: 'app-quicksort-algo',
  templateUrl: './quicksort-algo.component.html',
  styleUrls: ['./quicksort-algo.component.css'],
})
export class QuicksortAlgoComponent implements OnInit {
  public minimum: string;
  public maximum: string;
  public quantity: string;

  sortedArray: any[];

  minimumValue(event: HTMLInputElement) {
    this.minimum = event.value;
  }

  maximumValue(event: HTMLInputElement) {
    this.maximum = event.value;
  }

  quantityValue(event: HTMLInputElement) {
    this.quantity = event.value;
  }
  chartReady: boolean = false;

  barChartType = 'line';
  graphs = [{ viewValue: 'Bar' }, { viewValue: 'Pie' }, { viewValue: 'Line' }];

  setGraphType(graphType) {
    switch (graphType) {
      case 'Bar': {
        this.barChartType = 'bar';
        break;
      }
      case 'Pie': {
        this.barChartType = 'pie';
        break;
      }
      case 'Line': {
        this.barChartType = 'line';
        break;
      }
    }
  }

  barChartOptions = {
    animation: { duration: 0 },
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: { display: false },
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: { display: false },
          ticks: {
            display: false,
          },
        },
      ],
    },
    animationEnabled: false,
  };
  barChartLabels;

  barChartLegend = false;
  barChartData;

  index;

  constructor() {}

  ngOnInit(): void {}

  doQuickSort() {
    let arr = this.getRandomNumberBetween(
      this.minimum,
      this.maximum,
      this.quantity
    );
    let j;
    this.chartReady = true;
    this.generateChart(arr);
    for (let i = 0; i < arr.length; i++) {
      for (j = i; j < arr.length; j++) {
        setTimeout(function (y) {
           if (arr[y[0]] > arr[y[1]]) {
             let temp = arr[y[0]];
             arr[y[0]] = arr[y[1]];
             arr[y[1]] = temp;
             this.generateChart(arr);
           }

      }, j * 50, [i,j]);
      }
    }
    return arr;
  }

  getRandomNumberBetween(min, max, quantity) {
    let array = [];
    let i;
    for (i = 0; i < quantity; i++) {
      array[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    this.generateChart(array);
    return array;
  }

  generateChart(array) {
    this.barChartData = [
      { data: array, backgroundColor: 'aqua', label: 'Chart A' },
    ];
    this.barChartLabels = array;
  }
}
