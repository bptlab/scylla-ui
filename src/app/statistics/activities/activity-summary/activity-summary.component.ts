import {Component, Input, OnInit} from '@angular/core';
import { Activity } from '../../../services/file-sharing/process-statistics';

@Component({
  selector: 'app-activity-summary',
  templateUrl: './activity-summary.component.html',
  styleUrls: ['./activity-summary.component.css']
})
export class ActivitySummaryComponent implements OnInit {
  @Input() statistics: Activity;

  constructor() { }

  ngOnInit() {
  }
}
