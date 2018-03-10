import { Component, OnInit, Input } from '@angular/core';
import { Resource } from '../../../services/file-sharing/process-statistics';

@Component({
  selector: 'app-resource-kpi',
  templateUrl: './resource-kpi.component.html',
  styleUrls: ['./resource-kpi.component.css']
})
export class ResourceKpiComponent implements OnInit {
  @Input() statistics: Resource;

  constructor() { }

  ngOnInit() {
  }

}
