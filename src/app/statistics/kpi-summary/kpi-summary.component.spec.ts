import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiSummaryComponent } from './kpi-summary.component';

describe('KpiSummaryComponent', () => {
  let component: KpiSummaryComponent;
  let fixture: ComponentFixture<KpiSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
