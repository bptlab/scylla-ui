import { Component} from '@angular/core';
import { Activity } from '../../../services/file-sharing/process-statistics';
import { FileSharingService } from '../../../services/file-sharing/file-sharing.service';

@Component({
  selector: 'app-activity-overview',
  templateUrl: './activity-overview.component.html',
  styleUrls: ['./activity-overview.component.css']
})
export class ActivityOverviewComponent {
  public activities: Activity[];

  constructor(private service: FileSharingService) {
    this.activities = this.service.resourceUtil.processes.process.activities;
  }

}
