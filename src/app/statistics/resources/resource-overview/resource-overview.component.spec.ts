import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceOverviewComponent } from './resource-overview.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('ResourceOverviewComponent', () => {
  let component: ResourceOverviewComponent;
  let fixture: ComponentFixture<ResourceOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceOverviewComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
