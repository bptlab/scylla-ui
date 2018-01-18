import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LandingModule } from './landing/landing.module';
import { StatisticsModule } from './statistics/statistics.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './misc/not-found/not-found.component';
import { FileSharingService } from './services/file-sharing/file-sharing.service';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    LandingModule,
    StatisticsModule,
    AppRoutingModule
  ],
  providers: [FileSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

