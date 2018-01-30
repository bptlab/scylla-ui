import { Component, OnInit, Input } from '@angular/core';
import { FileSharingService } from '../../services/file-sharing/file-sharing.service';
import { ResourceUtilization, Resource } from '../../services/file-sharing/process-statistics';

@Component({
  selector: 'app-ressources-summary',
  templateUrl: './ressources-summary.component.html',
  styleUrls: ['./ressources-summary.component.css']
})
export class RessourcesSummaryComponent implements OnInit {
  @Input() statistics: Resource;

  constructor() { }

  ngOnInit() {
  }

}
