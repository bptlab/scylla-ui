import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { BpmnViewerComponent } from './bpmn-viewer/bpmn-viewer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StatisticsComponent, BpmnViewerComponent]
})
export class StatisticsModule { }
