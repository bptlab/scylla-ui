import { Component, OnInit } from '@angular/core';
import { FileSharingService } from '../services/file-sharing/file-sharing.service';
import { ResourceUtilization } from '../services/file-sharing/process-statistics';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  private statistics: ResourceUtilization;

  constructor(private service: FileSharingService) {
    this.statistics = this.service.resourceUtilization;
  }

  ngOnInit() {
  }

}
