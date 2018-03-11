import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityKpiComponent } from './activity-kpi.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('ActivityKpiComponent', () => {
  let component: ActivityKpiComponent;
  let fixture: ComponentFixture<ActivityKpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityKpiComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
