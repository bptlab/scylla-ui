import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LandingModule } from './landing/landing.module';
import { StatisticsModule } from './statistics/statistics.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './misc/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    LandingModule,
    StatisticsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
