import { TestBed, inject } from '@angular/core/testing';
import { FileSharingService } from './file-sharing.service';
import { Statistics, Configuration, ProcessInstance, ActivityInstance, ResourceInstance, Resource } from './process-statistics';
import { Parser } from 'xml2js';
import { parseNumbers } from 'xml2js/lib/processors';
import {cleanXML} from './xml-postprocessor';

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
  let parser: Parser;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileSharingService]
    });

    parser = new Parser({valueProcessors: [parseNumbers], explicitRoot: false, explicitArray: false});
  });

  it('should parse Statistics interface', () => {
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

    parser.parseString(xml, function (err, result) {
      parsed = result;
    });

    expect(parsed.min).toBe(375.0);
    expect(parsed.max).toBe(960.0);
    expect(parsed.median).toBe(375.0);
    expect(parsed.Q1).toBe(375.0);
    expect(parsed.Q3).toBe(960.0);
    expect(parsed.avg).toBe(570.0);
    expect(parsed.total).toBe(1710.0);
  });

  it('should parse Configuration interface', () => {
    const xml = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
                  <configuration>
                    <time_unit>SECONDS</time_unit>
                  </configuration>
                    `;

    let parsed: Configuration;
    parser.parseString(xml, function(err, result) {
      parsed = result;
    });

    expect(parsed.time_unit).toEqual('SECONDS');
  });

  it('should parse ProcessInstance interface', () => {
    const xml = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
                <instance>
                    <costs>960.0</costs>
                    <time>
                        <duration>6600</duration>
                        <effective>3000</effective>
                        <waiting>3600</waiting>
                        <offTime>0</offTime>
                    </time>
                </instance>
                    `;

      let parsed: ProcessInstance;

      parser.parseString(xml, function(err, result) {
        parsed = result;
      });

      expect(parsed.costs).toBe(960);
      expect(parsed.time.duration).toBe(6600);
      expect(parsed.time.effective).toBe(3000);
      expect(parsed.time.waiting).toBe(3600);
      expect(parsed.time.offTime).toBe(0);
  });

  it('should parse ActivityInstance interface', () => {
    const xml = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
                <instance>
                    <cost>0.0</cost>
                    <time>
                        <effective>0</effective>
                        <waiting>0</waiting>
                        <resources_idle>0</resources_idle>
                    </time>
                </instance>
                    `;

    let parsed: ActivityInstance;

    parser.parseString(xml, function(err, result) {
      parsed = result;
    });

    expect(parsed.cost).toBe(0);
    expect(parsed.time.effective).toBe(0);
    expect(parsed.time.waiting).toBe(0);
    expect(parsed.time.resources_idle).toBe(0);
  });

  it('should parse ResourceInstance interface', () => {
    const xml = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
                <instance>
                    <id>#2</id>
                    <cost>35721.33333333333</cost>
                    <time>
                        <in_use>109986</in_use>
                        <available>214328</available>
                        <workload>0.5131667350976074</workload>
                    </time>
                </instance>
                    `;

    let parsed: ResourceInstance;

    parser.parseString(xml, function(err, result) {
      parsed = result;
    });

    expect(parsed.cost).toBe(35721.33333333333);
    expect(parsed.id).toEqual('#2');
    expect(parsed.time.in_use).toBe(109986);
    expect(parsed.time.available).toBe(214328);
    expect(parsed.time.workload).toBe(0.5131667350976074);
  });

  it('should parse Resource interface', () => {
    const xml = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <resource>
    <type>Student</type>
    <cost>
        <min>35721.33333333333</min>
        <max>35721.33333333333</max>
        <median>35721.33333333333</median>
        <Q1>35721.33333333333</Q1>
        <Q3>35721.33333333333</Q3>
        <avg>35721.33333333333</avg>
        <total>178606.66666666663</total>
    </cost>
    <time>
        <in_use>
            <min>94537.0</min>
            <max>114714.0</max>
            <median>104618.0</median>
            <Q1>99263.0</Q1>
            <Q3>109986.0</Q3>
            <avg>104623.6</avg>
            <total>523118.0</total>
        </in_use>
        <available>
            <min>214328.0</min>
            <max>214328.0</max>
            <median>214328.0</median>
            <Q1>214328.0</Q1>
            <Q3>214328.0</Q3>
            <avg>214328.0</avg>
            <total>1071640.0</total>
        </available>
        <workload>
            <min>0.4410856257698481</min>
            <max>0.5352263819939532</max>
            <median>0.48812101078720466</median>
            <Q1>0.4631359411742749</Q1>
            <Q3>0.5131667350976074</Q3>
            <avg>0.4881471389645776</avg>
            <total>2.440735694822888</total>
        </workload>
    </time>
    <instances>
        <instance>
            <id>#3</id>
            <cost>35721.33333333333</cost>
            <time>
                <in_use>94537</in_use>
                <available>214328</available>
                <workload>0.4410856257698481</workload>
            </time>
        </instance>
        <instance>
            <id>#4</id>
            <cost>35721.33333333333</cost>
            <time>
                <in_use>104618</in_use>
                <available>214328</available>
                <workload>0.48812101078720466</workload>
            </time>
        </instance>
        <instance>
            <id>#0</id>
            <cost>35721.33333333333</cost>
            <time>
                <in_use>114714</in_use>
                <available>214328</available>
                <workload>0.5352263819939532</workload>
            </time>
        </instance>
        <instance>
            <id>#1</id>
            <cost>35721.33333333333</cost>
            <time>
                <in_use>99263</in_use>
                <available>214328</available>
                <workload>0.4631359411742749</workload>
            </time>
        </instance>
        <instance>
            <id>#2</id>
            <cost>35721.33333333333</cost>
            <time>
                <in_use>109986</in_use>
                <available>214328</available>
                <workload>0.5131667350976074</workload>
            </time>
        </instance>
    </instances>
</resource>
                    `;

      let parsed: Resource;
      // parser =  new Parser({explicitRoot: false, explicitArray: false});

      parser.parseString(xml, function(err, result) {
        parsed = cleanXML(result);
      });


      expect(parsed.cost.max).toBe(35721.33333333333);
      expect(parsed.cost.Q1).toBe(35721.33333333333);
      expect(parsed.instances.length).toBe(5);
      expect(parsed.instances.find(instance => instance.id === '#1').cost).toBe(35721.33333333333);
      expect(parsed.instances.find(instance => instance.id === '#0').time.available).toBe(214328);
      expect(parsed.instances.map(instance => instance.id).sort()).toEqual(['#0', '#1', '#2', '#3', '#4']);
  });
});
