import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-box-plot-diagram',
  templateUrl: './box-plot-diagram.component.html',
  styleUrls: ['./box-plot-diagram.component.css']
})
export class BoxPlotDiagramComponent implements OnInit {

  @Input() min: number;
  @Input() max: number;
  @Input() median: number;
  @Input() q1: number;
  @Input() q3: number;
  @Input() label: string;

  constructor() { }
  ngOnInit() {
    this.basicChart();
  }
  basicChart() {
    const y1 = [this.min, this.max, this.median, this.median, this.q1, this.q3];

    const trace1 = {
      y: y1,
      type: 'box',
      name: this.label,
      boxpoints: false,
    };

    const data = [trace1];

    Plotly.newPlot('chart', data);
  }

}
