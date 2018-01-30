import { Injectable } from '@angular/core';
import { File } from './File';
import { ResourceUtilization } from './process-statistics';
import { Parser } from 'xml2js';
import { parseNumbers } from 'xml2js/lib/processors';
import { cleanXML } from './xml-postprocessor';

@Injectable()
export class FileSharingService {
  private _bpmn: File;
  private _xes: File;
  private _xml: File;
  public resourceUtil: ResourceUtilization;

  private parseString = require('xml2js').parseString;

  setSource(fileFormat: string, fileSrc: string) {
    if (!this['_' + fileFormat]) {
      this['_' + fileFormat] = new File;
    }
    this['_' + fileFormat].data = fileSrc;
    this.loadResourceUtilization();
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

  private loadResourceUtilization() {
    const that = this;
    const test = new Parser({valueProcessors: [parseNumbers], explicitRoot: false, explicitArray: false});

    this.parseString(this.getData('xml'), (err, result) => {
      that.resourceUtil = cleanXML(result).resourceUtilization;
    });
  }
}
