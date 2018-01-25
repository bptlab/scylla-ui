import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FileSharingService} from '../../services/file-sharing/file-sharing.service';
import Activity = ProcessStatistics.Activity;
import {File} from '../../services/file-sharing/File';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activity: Activity;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.activity = params['activity_id'];
    });
  }

}
