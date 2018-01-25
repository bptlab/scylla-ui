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
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material';
import { BoxPlotDiagramComponent } from './box-plot-diagram/box-plot-diagram.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KpiSummaryComponent } from './kpi-summary/kpi-summary.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { RessourcesSummaryComponent } from './ressources-summary/ressources-summary.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ActivitiesModule } from './activities/activities.module';

@NgModule({
  imports: [
    MenuModule,
    CommonModule,
    ActivitiesModule,
    StatisticsRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
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
    PieChartComponent],
  providers: [
    FilesSelectedGuard
  ]
})
export class StatisticsModule { }
