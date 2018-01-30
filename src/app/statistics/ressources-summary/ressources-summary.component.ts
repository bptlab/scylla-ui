import { Component, OnInit } from '@angular/core';
import { FileSharingService } from '../../services/file-sharing/file-sharing.service';
import { ResourceUtilization } from '../../services/file-sharing/process-statistics';

@Component({
  selector: 'app-ressources-summary',
  templateUrl: './ressources-summary.component.html',
  styleUrls: ['./ressources-summary.component.css']
})
export class RessourcesSummaryComponent implements OnInit {
  public statistics: ResourceUtilization;

  constructor(private service: FileSharingService) {
    this.statistics = this.service.resourceUtil;
  }

  ngOnInit() {
  }

}
