import { Component, Input, OnInit} from '@angular/core';
import {FileSharingService} from '../../../services/file-sharing/file-sharing.service';

@Component({
  selector: 'app-file-reader',
  templateUrl: './file-reader.component.html',
  styleUrls: ['./file-reader.component.css'],
})
export class FileReaderComponent implements OnInit {

 @Input() data: string;

  dragging = false;
  loaded = false;
  fileSrc = '';
  displayedFileName: string;

  constructor(private service: FileSharingService) {


  }

  ngOnInit() {
    if (this.service.getData(this.data)) {
      this.loaded = true;
      this.displayedFileName = this.service.getName(this.data);
    }
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

    const pattern = /-*/;
    const reader = new FileReader();

 // TODO check if file has correct file extension

    if (file) {
      if (!file.type.match(pattern)) {
        alert('invalid format');
        return;
      }

      this.loaded = false;

      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsText(file);
      this.displayedFileName = file.name;
      this.service.setName(this.data, file.name);
    }
  }

  _handleReaderLoaded(e) {
    const reader = e.target;
    this.fileSrc = reader.result;
    this.service.setSource(this.data, reader.result);
    this.loaded = true;
  }

  acceptFileFormat(format: string) {
    return '.' + format;
  }

}
