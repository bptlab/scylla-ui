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
import { HeaderBarComponent } from './menu/header-bar/header-bar.component';
import { FooterBarComponent } from './menu/footer-bar/footer-bar.component';
import { LandingComponent } from './landing.component';
import { FileReaderComponent } from './file-selection/file-reader/file-reader.component';

@NgModule({
  imports: [
    LandingRoutingModule,
    CommonModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  declarations: [FileSelectionComponent, HeaderBarComponent, FooterBarComponent, LandingComponent, FileReaderComponent],
  exports: [
    LandingComponent,
    RouterModule
  ],
  bootstrap: [LandingComponent]
})
export class LandingModule { }
