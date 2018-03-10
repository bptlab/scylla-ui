import { Component, OnInit, Input } from '@angular/core';
import { Resource } from '../../../services/file-sharing/process-statistics';

@Component({
  selector: 'app-resources-kpi',
  templateUrl: './resources-kpi.component.html',
  styleUrls: ['./resources-kpi.component.css']
})
export class ResourcesKpiComponent implements OnInit {
  @Input() statistics: Resource;

  constructor() { }

  ngOnInit() {
  }

}
