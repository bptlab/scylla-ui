import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { BpmnViewerComponent } from './bpmn-viewer/bpmn-viewer.component';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [
    MenuModule,
    CommonModule,
    StatisticsRoutingModule
  ],
  declarations: [StatisticsComponent, BpmnViewerComponent, DashboardComponent]
})
export class StatisticsModule { }
