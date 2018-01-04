import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from '../landing/landing.component';
import { FileSelectionComponent } from '../landing/file-selection/file-selection.component';
import { RouterModule } from '@angular/router';

export const ROUTES = [
  {
    path: 'landing',
    component: LandingComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'files' },
      { path: 'files', component: FileSelectionComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class LandingRoutingModule { }
