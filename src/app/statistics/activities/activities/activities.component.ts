import { Component} from '@angular/core';
import { Activity } from '../../../services/file-sharing/process-statistics';
import { FileSharingService } from '../../../services/file-sharing/file-sharing.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  public activities: Activity[];

  constructor(private service: FileSharingService) {
    this.activities = this.service.resourceUtil.processes.process.activities;
  }

}
