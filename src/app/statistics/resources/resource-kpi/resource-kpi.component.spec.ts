import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceKpiComponent } from './resource-kpi.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('ResourceKpiComponent', () => {
  let component: ResourceKpiComponent;
  let fixture: ComponentFixture<ResourceKpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceKpiComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
