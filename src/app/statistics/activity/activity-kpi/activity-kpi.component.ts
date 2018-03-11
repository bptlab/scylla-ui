import {Component, Input, OnInit} from '@angular/core';
import { Activity } from '../../../services/file-sharing/process-statistics';

@Component({
  selector: 'app-activity-kpi',
  templateUrl: './activity-kpi.component.html',
  styleUrls: ['./activity-kpi.component.css']
})
export class ActivityKpiComponent implements OnInit {
  @Input() statistics: Activity;
  @Input() timeUnit: string;

  constructor() { }

  ngOnInit() {
  }
}
