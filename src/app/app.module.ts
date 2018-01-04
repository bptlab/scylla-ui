import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LandingModule } from './landing/landing.module';
import { StatisticsModule } from './statistics/statistics.module';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './misc/not-found/not-found.component';
import { LandingComponent } from './landing/landing.component';

export const ROUTES = [
  { path: 'landing', component: LandingComponent },
  { path: '', pathMatch: 'full', redirectTo: '/landing' },
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
