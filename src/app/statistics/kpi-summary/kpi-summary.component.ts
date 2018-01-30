import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-kpi-summary',
  templateUrl: './kpi-summary.component.html',
  styleUrls: ['./kpi-summary.component.css']
})
export class KpiSummaryComponent implements OnInit {

  @Input() processID: string;

  constructor() { }

  ngOnInit() {
  }

}
