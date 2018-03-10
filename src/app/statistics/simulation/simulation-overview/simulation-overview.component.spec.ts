import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimulationOverviewComponent } from './simulation-overview.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FileSharingService } from '../../../services/file-sharing/file-sharing.service';

describe('SimulationOverviewComponent', () => {
  let component: SimulationOverviewComponent;
  let fixture: ComponentFixture<SimulationOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulationOverviewComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [FileSharingService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
