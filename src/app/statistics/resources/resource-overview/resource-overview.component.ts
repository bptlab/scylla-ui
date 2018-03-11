import { Component, OnInit } from '@angular/core';
import { Resource } from '../../../services/file-sharing/process-statistics';
import { FileSharingService } from '../../../services/file-sharing/file-sharing.service';

@Component({
  selector: 'app-resource-overview',
  templateUrl: './resource-overview.component.html',
  styleUrls: ['./resource-overview.component.css']
})
export class ResourceOverviewComponent implements OnInit {
  public resources: Resource[];
  timeUnit: string;

  constructor(private service: FileSharingService) {
    this.resources = this.service.resourceUtilization.resources;
    this.timeUnit = this.service.resourceUtilization.configuration.time_unit.toLowerCase();
  }

  ngOnInit() {
  }

}
