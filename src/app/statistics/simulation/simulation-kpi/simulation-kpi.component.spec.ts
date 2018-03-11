import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {SimulationKpiComponent} from './simulation-kpi.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('SimulationKpiComponent', () => {
  let component: SimulationKpiComponent;
  let fixture: ComponentFixture<SimulationKpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulationKpiComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
