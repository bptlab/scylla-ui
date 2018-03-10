import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesKpiComponent } from './resources-kpi.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('ResourcesKpiComponent', () => {
  let component: ResourcesKpiComponent;
  let fixture: ComponentFixture<ResourcesKpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesKpiComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
