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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FileSharingService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['activity_id'];
      this.activity = this.service.resourceUtil.processes.process.activities.find(task => task.id === id);
    });
  }

  ngAfterViewInit() {
    // this.bpmnViewer.colorTask(this.activity-detail);
  }

}
