import { Component, OnInit } from '@angular/core';
import { FileSharingService } from '../../../services/file-sharing/file-sharing.service';
import { Resource } from '../../../services/file-sharing/process-statistics';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.css']
})
export class ResourceDetailComponent implements OnInit {

  timeUnit: string;
  resource: Resource;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FileSharingService
  ) {
    this.route.params.subscribe((params: Params) => {
    const resourceType = params['resource_type'];
    this.resource = this.service.resourceUtilization.resources.find(item => item.type = resourceType);
    this.timeUnit = this.service.resourceUtilization.configuration.time_unit.toLowerCase();
    });
  }

  ngOnInit() {
  }

}
