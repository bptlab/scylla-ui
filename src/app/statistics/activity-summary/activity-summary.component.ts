import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-activity-summary',
  templateUrl: './activity-summary.component.html',
  styleUrls: ['./activity-summary.component.css']
})
export class ActivitySummaryComponent implements OnInit {

  @Input() inputId: string;

  constructor() { }

  ngOnInit() {
  }
}
