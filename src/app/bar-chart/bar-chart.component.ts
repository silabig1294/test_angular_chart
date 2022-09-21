import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import {RootObject,Body} from "../services/test";
import {TestService} from "../services/test.service";
import { HttpErrorResponse } from '@angular/common/http';
// import * from "../../assets";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: [ './bar-chart.component.css' ]
})
export class BarChartComponent {
  title = 'ng2-charts-demo';
  yearBack: Body = {
    year_back : "2",
  }
  // allData:RootObject[];
  public tests:RootObject[]|undefined;
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        // fill: true,
        // tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(155,155,155,0.3)'
      }
    ]
  };
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: false
  };
  public barChartLegend = true;

  constructor(private ts:TestService) {
    // this.get();
  }

  ngOnInit(): void {}

  // get(){
  //   this.ts.getData(this.yearBack).subscribe({
  //     next:(data:RootObject[]) => {
  //       this.tests = data;
  //       console.log(this.tests)
  //     },
  //     error:(err) => {
  //       console.log(err);
  //     }
}
