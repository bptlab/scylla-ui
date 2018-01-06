import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmnViewerComponent } from './bpmn-viewer.component';

describe('BpmnViewerComponent', () => {
  let component: BpmnViewerComponent;
  let fixture: ComponentFixture<BpmnViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpmnViewerComponent ]
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
