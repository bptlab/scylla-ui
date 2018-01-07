import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { BpmnViewerComponent } from './bpmn-viewer/bpmn-viewer.component';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuModule } from '../menu/menu.module';
import { FilesSelectedGuard } from '../guards/files-selected.guard';
import { MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    MenuModule,
    CommonModule,
    StatisticsRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule
  ],
  declarations: [StatisticsComponent, BpmnViewerComponent, DashboardComponent],
  providers: [
    FilesSelectedGuard
  ]
})
export class StatisticsModule { }
