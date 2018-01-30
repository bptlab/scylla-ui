import {AfterViewInit, Component, Input} from '@angular/core';
import { Statistics } from '../../services/file-sharing/process-statistics';

@Component({
  selector: 'app-box-plot-diagram',
  templateUrl: './box-plot-diagram.component.html',
  styleUrls: ['./box-plot-diagram.component.css']
})
export class BoxPlotDiagramComponent implements AfterViewInit {

  @Input() label: string;
  @Input() statistics: Statistics;

  constructor() { }

  ngAfterViewInit() {
    this.basicChart();
  }

  basicChart() {
    const y1 = [
      this.statistics.min,
      this.statistics.max,
      this.statistics.median,
      this.statistics.median,
      this.statistics.Q1,
      this.statistics.Q3
    ];

    const trace1 = {
      y: y1,
      type: 'box',
      name: this.label,
      boxpoints: false,
      marker: {
        size: 2,
        color: 'rgb(95,64,176)'
      },
      line: {
        width: 1
      }
    };

    const layout = {
      title: this.label,
      showlegend: false,
    };

    const data = [trace1];

    Plotly.newPlot('chart_' + this.label, data, layout);
  }

}
