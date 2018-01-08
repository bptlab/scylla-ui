import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FileReaderComponent } from './file-reader.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FileSharingService} from '../../../services/file-sharing/file-sharing.service';

describe('FileReaderComponent', () => {
  let component: FileReaderComponent;
  let fixture: ComponentFixture<FileReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileReaderComponent ],
      providers: [ FileSharingService ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
