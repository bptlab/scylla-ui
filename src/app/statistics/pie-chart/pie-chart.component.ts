import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements AfterViewInit {

  @Input() workload: number;
  @Input() label: string;

  constructor() { }

  ngAfterViewInit() {
    this.basicChart();
  }

  basicChart() {
    const data = [{
      values: [19, 26],
      labels: ['In Use', 'Available'],
      marker: {
        colors: ['rgb(147,112,219)', 'rgb(211,211,211)'],
      },
      type: 'pie'
    }];

    const layout = {
      height: 400,
      width: 400
    };

    Plotly.newPlot('chart_' + this.label, data, layout, {displayModeBar: false});
  }



}
