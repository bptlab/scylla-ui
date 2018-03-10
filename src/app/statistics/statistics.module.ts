import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { BpmnViewerComponent } from './diagrams/bpmn-viewer/bpmn-viewer.component';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { DashboardComponent } from './simulation/dashboard/dashboard.component';
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
import { KpiSummaryComponent } from './simulation/kpi-summary/kpi-summary.component';
import { RessourcesComponent } from './ressource/ressources/ressources.component';
import { RessourcesSummaryComponent } from './ressource/ressources-summary/ressources-summary.component';
import { PieChartComponent } from './diagrams/pie-chart/pie-chart.component';
import {ActivitiesComponent} from './activity/activities/activities.component';
import {ActivityComponent} from './activity/activity-detail/activity.component';
import { ActivitySummaryComponent } from './activity/activity-summary/activity-summary.component';

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
    DashboardComponent,
    BoxPlotDiagramComponent,
    KpiSummaryComponent,
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
