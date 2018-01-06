import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { BpmnViewerComponent } from './bpmn-viewer/bpmn-viewer.component';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuModule } from '../menu/menu.module';
import { FilesSelectedGuard } from '../guards/files-selected.guard';

@NgModule({
  imports: [
    MenuModule,
    CommonModule,
    StatisticsRoutingModule
  ],
  declarations: [StatisticsComponent, BpmnViewerComponent, DashboardComponent],
  providers: [
    FilesSelectedGuard
  ]
})
export class StatisticsModule { }
