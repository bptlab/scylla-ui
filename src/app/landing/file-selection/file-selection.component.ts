import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-file-selection',
  templateUrl: './file-selection.component.html',
  styleUrls: ['./file-selection.component.css'],
})
export class FileSelectionComponent {

  dragging = false;
  loaded = false;
  fileLoaded = false;
  fileSrc = '';

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

  handleImageLoad() {
    this.fileLoaded = true;
  }

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    const pattern = /-*.bpmn/;
    const reader = new FileReader();

    /*if (!file.type.match(pattern)) {
      alert('invalid format blubber');
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
