import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ressources-summary',
  templateUrl: './ressources-summary.component.html',
  styleUrls: ['./ressources-summary.component.css']
})
export class RessourcesSummaryComponent implements OnInit {

  @Input() ressourceId: string;

  constructor() { }

  ngOnInit() {
  }

}
