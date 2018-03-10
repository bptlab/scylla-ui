import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { BpmnViewerComponent } from './diagrams/bpmn-viewer/bpmn-viewer.component';
import { StatisticsRoutingModule } from './statistics-routing.module';
import {SimulationOverviewComponent} from './simulation/simulation-overview/simulation-overview.component';
import { MenuModule } from '../menu/menu.module';
import { FilesSelectedGuard } from '../guards/files-selected.guard';
import { MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { BoxPlotDiagramComponent } from './diagrams/box-plot-diagram/box-plot-diagram.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RessourcesOverviewComponent } from './resources/resources-overview/resources-overview.component';
import { ResourcesKpiComponent } from './resources/resources-kpi/resources-kpi.component';
import { PieChartComponent } from './diagrams/pie-chart/pie-chart.component';
import {ActivitiesComponent} from './activities/activities/activities.component';
import {ActivityComponent} from './activities/activity-detail/activity.component';
import { ActivitySummaryComponent } from './activities/activity-summary/activity-summary.component';
import {SimulationKpiComponent} from './simulation/simulation-kpi/simulation-kpi.component';

@NgModule({
  imports: [
    MenuModule,
    CommonModule,
    StatisticsRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  declarations: [
    StatisticsComponent,
    BpmnViewerComponent,
    SimulationOverviewComponent,
    BoxPlotDiagramComponent,
    SimulationKpiComponent,
    RessourcesOverviewComponent,
    ResourcesKpiComponent,
    PieChartComponent,
    ActivitiesComponent,
    ActivityComponent,
    ActivitySummaryComponent],
  providers: [
    FilesSelectedGuard
  ]
})
export class StatisticsModule { }
