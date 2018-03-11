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

  constructor(private service: FileSharingService) { }

  ngOnInit() {
    if (this.service.getData(this.data)) {
      this.loaded = true;
      this.displayedFileName = this.service.getName(this.data);
    }
  }

  /*
  Drag and drop is already implemented but commented out for now because the file extension is not checked yet

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
*/

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const reader = new FileReader();

    if (file) {
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
