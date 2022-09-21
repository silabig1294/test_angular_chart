import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent{
  title = 'ng2-charts-demo';

  
  public pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
  };

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false
  };

  public pieChartLegend = true;

  constructor() {
  }

  ngOnInit() {
  }

}
