import { Component, OnInit } from '@angular/core';
import Activity = ProcessStatistics.Activity;

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {


  // TODO remove once we have actual data
  activities: any[];
  constructor() {
    this.activities = [
      {
        id: 'hol',
    name: 'test1' },
      {
        id: 'hol',
        name: 'test2' },

    ];
  }

  ngOnInit() {
  }

}
