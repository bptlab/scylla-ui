import { Component, OnInit } from '@angular/core';
import { Resource } from '../../../services/file-sharing/process-statistics';
import { FileSharingService } from '../../../services/file-sharing/file-sharing.service';

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.css']
})
export class RessourcesComponent implements OnInit {
  public resources: Resource[];

  constructor(private service: FileSharingService) {
    this.resources = this.service.resourceUtil.resources;
  }

  ngOnInit() {
  }

}
