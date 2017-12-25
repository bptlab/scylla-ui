import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
}from '@angular/material';

import { FileSelectionComponent } from './file-selection/file-selection.component';
import { HeaderBarComponent } from './menu/header-bar/header-bar.component';
import { FooterBarComponent } from './menu/footer-bar/footer-bar.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [FileSelectionComponent, HeaderBarComponent, FooterBarComponent],
  exports: [
    HeaderBarComponent,
    FooterBarComponent
  ]
})
export class LandingModule { }
