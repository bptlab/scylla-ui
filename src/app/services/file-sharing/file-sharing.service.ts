import { Injectable } from '@angular/core';

@Injectable()
export class FileSharingService {
  private _bpmn: string;
  private _xes: string;
  private _json: string;

  // stores data in Base64 encoding
  set(fileFormat: string, fileSrc: string) {
    this['_' + fileFormat] = this.cutFileEncoding(fileSrc);
  }

  get(fileFormat: string) {
    return this['_' + fileFormat];
  }

  cutFileEncoding(fileSrc: string) {
    const splitString = fileSrc.split(',');
    return splitString[1];
  }

}
