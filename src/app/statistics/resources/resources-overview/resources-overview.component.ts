import { Component, OnInit } from '@angular/core';
import { Resource } from '../../../services/file-sharing/process-statistics';
import { FileSharingService } from '../../../services/file-sharing/file-sharing.service';

@Component({
  selector: 'app-resources-overview',
  templateUrl: './resources-overview.component.html',
  styleUrls: ['./resources-overview.component.css']
})
export class RessourcesOverviewComponent implements OnInit {
  public resources: Resource[];

  constructor(private service: FileSharingService) {
    this.resources = this.service.resourceUtil.resources;
  }

  ngOnInit() {
  }

}
