import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSelectionComponent } from './file-selection.component';

describe('FileSelectionComponent', () => {
  let component: FileSelectionComponent;
  let fixture: ComponentFixture<FileSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
