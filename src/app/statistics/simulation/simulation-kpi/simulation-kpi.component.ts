import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Process } from '../../../services/file-sharing/process-statistics';

@Component({
  selector: 'app-simulation-kpi',
  templateUrl: './simulation-kpi.component.html',
  styleUrls: ['./simulation-kpi.component.css']
})
export class SimulationKpiComponent implements OnInit {
  @Input() statistics: Process;
  @Input() processID: string;

  constructor() { }

  ngOnInit() {
  }

}
