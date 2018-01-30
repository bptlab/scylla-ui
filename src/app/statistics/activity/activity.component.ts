import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Activity} from '../../services/statistics/process-statistics';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit, AfterViewInit {
@ViewChild('bpmnViewer') bpmnViewer;


  activity: Activity;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.activity = params['activity_id'];
    });
  }

  ngAfterViewInit() {
    // this.bpmnViewer.colorTask(this.activity);
  }

}
