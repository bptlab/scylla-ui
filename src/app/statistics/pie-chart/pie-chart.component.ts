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
      type: 'pie'
    }];

    const layout = {
      title: 'Workload',
      height: 400,
      width: 500
    };

    Plotly.newPlot('chart_' + this.label, data, layout, {displayModeBar: false});
  }



}
