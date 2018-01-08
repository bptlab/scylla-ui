import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';
import { Router, RouterModule } from '@angular/router';
import { LandingRoutingModule } from './landing-routing.module';

import { FileSelectionComponent } from './file-selection/file-selection.component';
import { LandingComponent } from './landing.component';
import { FileReaderComponent } from './file-selection/file-reader/file-reader.component';
import { ProcessStatisticsService } from '../services/statistics/process-statistics.service';
import {FileSharingService} from '../services/file-sharing/file-sharing.service';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [
    MenuModule,
    LandingRoutingModule,
    CommonModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  declarations: [FileSelectionComponent, LandingComponent, FileReaderComponent],
  exports: [
    LandingComponent,
    RouterModule
  ],
  bootstrap: [LandingComponent],
  providers: [FileSharingService, ProcessStatisticsService]
})
export class LandingModule { }
