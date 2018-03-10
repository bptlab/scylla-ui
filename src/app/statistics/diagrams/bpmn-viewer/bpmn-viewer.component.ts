import { Component, OnInit } from '@angular/core';
import { FileSharingService } from '../../../services/file-sharing/file-sharing.service';

import 'bpmn-js';
import 'bpmn-js/lib/NavigatedViewer';
import {Router} from '@angular/router';

const bpmnViewer = require('bpmn-js/lib/NavigatedViewer');

@Component({
  selector: 'app-bpmn-viewer',
  templateUrl: './bpmn-viewer.component.html',
  styleUrls: ['./bpmn-viewer.component.css']
})
export class BpmnViewerComponent implements OnInit {
  viewer: any;

  ngOnInit() {
    this.viewer = new bpmnViewer({ container: '#canvas' });
    this.loadBPMN();
  }

  constructor(private fileService: FileSharingService, private router: Router) { }

  loadBPMN() {
    const xml = this.fileService.getData('bpmn'); // my BPMN 2.0 xml

    this.viewer.importXML(xml, (err: any) => {
      if (err) {
        console.log('error rendering', err);
      } else {
        const canvas = this.viewer.get('canvas');

        // click events
        const eventBus = this.viewer.get('eventBus');
        eventBus.on('element.click', task => {
          this.navigateToTask(task);
        });
        this.centerModel();
      }
    });

  }

  navigateToTask(task) {
    if (task.element.type === 'bpmn:Task') {
      this.router.navigate(['/statistics/activity/' + task.element.id]);
      console.log(task.element.id);
    }

  }

  public colorTask(taskID) {
    console.log('colorTask wurde aufgerufen');
    // TODO implement
  }

  centerModel() {
    const canvas = this.viewer.get('canvas');
    canvas.zoom('fit-viewport');
  }

}
