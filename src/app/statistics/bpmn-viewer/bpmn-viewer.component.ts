import { Component, OnInit } from '@angular/core';
import { FileSharingService } from '../../services/file-sharing/file-sharing.service';

import 'bpmn-js';
import 'bpmn-js/lib/NavigatedViewer';

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

  constructor(private fileService: FileSharingService) { }

  loadBPMN() {
    const xml = this.fileService.getData('bpmn'); // my BPMN 2.0 xml

    this.viewer.importXML(xml, (err: any) => {
      if (err) {
        console.log('error rendering', err);
      } else {
        const canvas = this.viewer.get('canvas');
        canvas.zoom('fit-viewport');

        // click events
        const eventBus = this.viewer.get('eventBus');
        eventBus.on('element.click', task => {
          // debugger;
          this.test(task);
        });
        /*events.forEach(event => {
          eventBus.on(event, task => {

            // e.element = the model element
            // e.gfx = the graphical element
this.test();
            console.log(event, 'on', task.element.id);
          });
        });*/
      }
    });

  }

test(task) {
    if (task.element.type === 'bpmn:Task') {
      console.log(task.element.id);
    }
}

}
