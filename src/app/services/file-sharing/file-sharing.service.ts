import { Injectable } from '@angular/core';

@Injectable()
export class FileSharingService {
  private _bpmn: File;
  private _xes: String;
  private _JSON: JSON;

  // stores Data in Base64 encoding
  set(fileFormat: String, fileSrc) {
    this['_' + fileFormat] = fileSrc;
  }

  get(fileFormat: String) {
    return this['_' + fileFormat];
  }

}
