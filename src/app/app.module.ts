import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LandingModule } from './landing/landing.module';
import { StatisticsModule } from './statistics/statistics.module';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './misc/not-found/not-found.component';
import { FileSelectionComponent } from './landing/file-selection/file-selection.component';

export const ROUTES = [
  { path: 'files', component: FileSelectionComponent },
  { path: '', pathMatch: 'full', redirectTo: '/files' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    LandingModule,
    StatisticsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
