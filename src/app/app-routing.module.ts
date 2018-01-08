import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './misc/not-found/not-found.component';
import { StatisticsComponent } from './statistics/statistics.component';

export const ROUTES = [
  { path: 'landing', component: LandingComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/landing/files' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
