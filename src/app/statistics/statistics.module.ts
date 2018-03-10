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
import { RessourcesComponent } from './ressource/ressources/ressources.component';
import { RessourcesSummaryComponent } from './ressource/ressources-summary/ressources-summary.component';
import { PieChartComponent } from './diagrams/pie-chart/pie-chart.component';
import {ActivitiesComponent} from './activity/activities/activities.component';
import {ActivityComponent} from './activity/activity-detail/activity.component';
import { ActivitySummaryComponent } from './activity/activity-summary/activity-summary.component';
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
    RessourcesComponent,
    RessourcesSummaryComponent,
    PieChartComponent,
    ActivitiesComponent,
    ActivityComponent,
    ActivitySummaryComponent],
  providers: [
    FilesSelectedGuard
  ]
})
export class StatisticsModule { }
