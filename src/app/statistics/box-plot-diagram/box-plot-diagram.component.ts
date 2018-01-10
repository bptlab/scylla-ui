import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-box-plot-diagram',
  templateUrl: './box-plot-diagram.component.html',
  styleUrls: ['./box-plot-diagram.component.css']
})
export class BoxPlotDiagramComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    this.basicChart();
  }
  basicChart() {
    const y0: number[] = [];
    const y1: number[] = [];
    for (let i = 0; i < 50; i ++) {
      y0[i] = Math.random();
      y1[i] = Math.random() + 1;
    }

    const trace1 = {
      y: y0,
      type: 'box'
    };

    const trace2 = {
      y: y1,
      type: 'box'
    };

    const data = [trace1, trace2];

    Plotly.newPlot('chart', data);
  }

}
