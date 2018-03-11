import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivityDetailComponent } from './activity-detail.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import {FileSharingService} from '../../../services/file-sharing/file-sharing.service';



describe('ActivityDetailComponent', () => {
  let component: ActivityDetailComponent;
  let fixture: ComponentFixture<ActivityDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ ActivityDetailComponent ],
      providers: [FileSharingService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
