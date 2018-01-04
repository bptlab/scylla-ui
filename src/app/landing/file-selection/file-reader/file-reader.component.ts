import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-file-reader',
  templateUrl: './file-reader.component.html',
  styleUrls: ['./file-reader.component.css']
})
export class FileReaderComponent {

 @Input() data;

  dragging = false;
  loaded = false;
  fileLoaded = false;
  fileSrc = '';
  fileType = 'blubber';

  constructor() {

  }
  handleDragEnter() {
    this.dragging = true;
  }

  handleDragLeave() {
    this.dragging = false;
  }

  handleDrop(e) {
    e.preventDefault();
    this.dragging = false;
    this.handleInputChange(e);
  }

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    const pattern = /-*.bpmn/;
    const reader = new FileReader();

    /*if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }*/

    this.loaded = false;

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    const reader = e.target;
    this.fileSrc = reader.result;
    this.loaded = true;
  }

}
