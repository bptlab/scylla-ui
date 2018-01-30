import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySummaryComponent } from './activity-summary.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('ActivitySummaryComponent', () => {
  let component: ActivitySummaryComponent;
  let fixture: ComponentFixture<ActivitySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitySummaryComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
