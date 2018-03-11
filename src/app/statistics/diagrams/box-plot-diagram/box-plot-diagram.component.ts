import {AfterViewInit, Component, Input} from '@angular/core';
import { Statistics } from '../../../services/file-sharing/process-statistics';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-box-plot-diagram',
  templateUrl: './box-plot-diagram.component.html',
  styleUrls: ['./box-plot-diagram.component.css']
})
export class BoxPlotDiagramComponent implements AfterViewInit {

  @Input() label: string;
  @Input() chartId: string;
  @Input() statistics: Statistics;

  constructor() { }

  ngAfterViewInit() {
    if (this.statistics) {
      this.basicChart();
    }
  }

  basicChart() {
    const trace1 = this.trace1();

    const layout = {
      showlegend: false,
    };

    const data = [trace1];

    this.plot(this.chartId, data, layout);
  }

  private plot(chartId: string, data: any, layout: { showlegend: Boolean}) {
    Plotly.newPlot('chart_' + chartId, data, layout, {displayModeBar: false});
  }

  private y1() {
    return [
      Math.round(this.statistics.min * 100) / 100,
      Math.round(this.statistics.max * 100) / 100,
      Math.round(this.statistics.median * 100) / 100,
      Math.round(this.statistics.median * 100) / 100,
      Math.round(this.statistics.Q1 * 100) / 100,
      Math.round(this.statistics.Q3 * 100) / 100,
    ];
  }

  private trace1() {
    return {
      y: this.y1(),
      type: 'box',
      name: this.label,
      boxpoints: false,
      marker: {
        size: 2,
        color: 'rgb(95,64,176)'
      },
      line: {
        width: 1
      },
    };
  }
}
