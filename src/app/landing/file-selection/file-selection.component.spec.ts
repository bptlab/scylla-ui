import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSelectionComponent } from './file-selection.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('FileSelectionComponent', () => {
  let component: FileSelectionComponent;
  let fixture: ComponentFixture<FileSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileSelectionComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
