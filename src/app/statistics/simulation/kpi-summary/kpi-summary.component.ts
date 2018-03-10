import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Process } from '../../../services/file-sharing/process-statistics';

@Component({
  selector: 'app-kpi-summary',
  templateUrl: './kpi-summary.component.html',
  styleUrls: ['./kpi-summary.component.css']
})
export class KpiSummaryComponent implements OnInit {
  @Input() statistics: Process;
  @Input() processID: string;

  constructor() { }

  ngOnInit() {
  }

}
