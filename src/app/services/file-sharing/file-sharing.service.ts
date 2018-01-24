import { Injectable } from '@angular/core';
import {File} from './File';

@Injectable()
export class FileSharingService {
  private _bpmn: File;
  private _xes: File;
  private _xml: File;

  setSource(fileFormat: string, fileSrc: string) {
    if (!this['_' + fileFormat]) {
      this['_' + fileFormat] = new File;
    }
    this['_' + fileFormat].data = fileSrc;

  }

  setName(fileFormat: string, fileName: string) {
    if (!this['_' + fileFormat]) {
      this['_' + fileFormat] = new File;
    }
    this['_' + fileFormat].name = fileName;
  }

  get(fileFormat: string) {
    if (!this['_' + fileFormat]) {
      return null;
    }
    return this['_' + fileFormat];
  }
  getName(fileFormat: string) {
    if (!this['_' + fileFormat]) {
      return null;
    }
    return this['_' + fileFormat].name;
  }
  getData(fileFormat: string) {
    if (!this['_' + fileFormat]) {
      return null;
    }
    return this['_' + fileFormat].data;
  }

}
