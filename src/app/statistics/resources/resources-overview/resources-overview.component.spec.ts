import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourcesOverviewComponent } from './resources-overview.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('RessourcesOverviewComponent', () => {
  let component: RessourcesOverviewComponent;
  let fixture: ComponentFixture<RessourcesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RessourcesOverviewComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RessourcesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
