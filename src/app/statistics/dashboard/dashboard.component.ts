import { Component, OnInit } from '@angular/core';
import { FileSharingService } from '../../services/file-sharing/file-sharing.service';
import { ResourceUtilization } from '../../services/file-sharing/process-statistics';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public statistics: ResourceUtilization;

  constructor(private service: FileSharingService) {
    this.statistics = this.service.resourceUtil;
  }

  ngOnInit() {
  }

}
