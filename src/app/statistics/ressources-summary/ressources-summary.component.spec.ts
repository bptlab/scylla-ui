import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourcesSummaryComponent } from './ressources-summary.component';

describe('RessourcesSummaryComponent', () => {
  let component: RessourcesSummaryComponent;
  let fixture: ComponentFixture<RessourcesSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RessourcesSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RessourcesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
