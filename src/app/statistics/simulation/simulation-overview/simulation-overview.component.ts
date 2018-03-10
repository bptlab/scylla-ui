import { Component, OnInit } from '@angular/core';
import { FileSharingService } from '../../../services/file-sharing/file-sharing.service';
import { ResourceUtilization } from '../../../services/file-sharing/process-statistics';

@Component({
  selector: 'app-simulation-overview',
  templateUrl: './simulation-overview.component.html',
  styleUrls: ['./simulation-overview.css']
})
export class SimulationOverviewComponent implements OnInit {
  public statistics: ResourceUtilization;

  constructor(private service: FileSharingService) {
    this.statistics = this.service.resourceUtil;
  }

  ngOnInit() {
  }

}