import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Activity} from '../../../services/file-sharing/process-statistics';
import { FileSharingService } from '../../../services/file-sharing/file-sharing.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit, AfterViewInit {
@ViewChild('bpmnViewer') bpmnViewer;


  activity: Activity;
  timeUnit: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FileSharingService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const name = params['activity_name'];
      this.activity = this.service.resourceUtilization.processes.process.activities.find(task => task.name === name);
      this.timeUnit = this.service.resourceUtilization.configuration.time_unit.toLowerCase();
    });
  }

  ngAfterViewInit() {
    // this.bpmnViewer.colorTask(this.activity-detail);
  }

}
