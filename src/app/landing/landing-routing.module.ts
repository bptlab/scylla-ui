import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const ROUTES = [
  {
    path: 'landing',
    component: LandingComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'files' },
      { path: 'files', component: FileSelectionComponent }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class LandingRoutingModule { }
