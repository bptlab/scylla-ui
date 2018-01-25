import { TestBed, inject } from '@angular/core/testing';
import { FileSharingService } from './file-sharing.service';
import { Statistics } from './process-statistics';
import { Parser } from 'xml2js';
import { parseNumbers } from 'xml2js/lib/processors';

describe('FileSharingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileSharingService]
    });
  });

  it('should be created', inject([FileSharingService], (service: FileSharingService) => {
    expect(service).toBeTruthy();
  }));
});

fdescribe('xml2js parser', () => {
  // let parseString: any; // parsing engine for xml
  // let parseNumbers: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileSharingService]
    });

    // parseString = require('xml2js-parser').parseString;
    // parseString = require('xml2js').parseString;
    // parseNumbers = require('xml2js').parseNumbers;
  });

  fit('should parse Statistics', () => {
    const xml = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
                  <root>
                    <min>375.0</min>
                    <max>960.0</max>
                    <median>375.0</median>
                    <Q1>375.0</Q1>
                    <Q3>960.0</Q3>
                    <avg>570.0</avg>
                    <total>1710.0</total>
                  </root>
                    `;

    let parsed: Statistics; // any;
    const parser = new Parser({valueProcessors: [parseNumbers], explicitRoot: false, explicitArray: false});
    parser.parseString(xml, function (err, result) {
      parsed = result;
    });

    /*
    parseString(xml)
      .then((res) => parsed = res)
      .catch((err) => fail());
    */

    expect(parsed.min).toBe(375.0);
    expect(parsed.max).toBe(960.0);
    expect(parsed.median).toBe(375.0);
    expect(parsed.Q1).toBe(375.0);
    expect(parsed.Q3).toBe(960.0);
    expect(parsed.avg).toBe(570.0);
    expect(parsed.total).toBe(1710.0);
  });
});
