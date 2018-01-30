import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BoxPlotDiagramComponent } from './box-plot-diagram.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

describe('BoxPlotDiagramComponent', () => {
  let component: BoxPlotDiagramComponent;
  let fixture: ComponentFixture<BoxPlotDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxPlotDiagramComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPlotDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
