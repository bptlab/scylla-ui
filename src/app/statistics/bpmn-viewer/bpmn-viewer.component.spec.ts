import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmnViewerComponent } from './bpmn-viewer.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FileSharingService} from '../../services/file-sharing/file-sharing.service';

describe('BpmnViewerComponent', () => {
  let component: BpmnViewerComponent;
  let fixture: ComponentFixture<BpmnViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpmnViewerComponent ],
      providers: [FileSharingService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpmnViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
