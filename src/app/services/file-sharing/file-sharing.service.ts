import { Injectable } from '@angular/core';

@Injectable()
export class FileSharingService {
  private _bpmn: File;
  private _xes: String;
  private _JSON: JSON;

  set(fileFormat: String, fileSrc) {
    if (!fileFormat.localeCompare('json')) {
      this.setJSON(fileSrc);
    } else {
      this['_' + fileFormat] = fileSrc;
      console.log('BPMN ' + this._bpmn);
      console.log('XES ' + this._xes);
    }
  }

  get(fileFormat: String) {
    return this['_' + fileFormat];
  }

  setJSON(fileSrc) {
    this['_JSON'] = fileSrc;
    console.log('JSON :' + this._JSON);
  }
}
