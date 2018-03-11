import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { BpmnViewerComponent } from './diagrams/bpmn-viewer/bpmn-viewer.component';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { SimulationOverviewComponent } from './simulation/simulation-overview/simulation-overview.component';
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
import { ResourceOverviewComponent } from './resources/resource-overview/resource-overview.component';
import { ResourceKpiComponent } from './resources/resource-kpi/resource-kpi.component';
import { PieChartComponent } from './diagrams/pie-chart/pie-chart.component';
import { ActivityOverviewComponent } from './activity/activity-overview/activity-overview.component';
import { ActivityDetailComponent } from './activity/activity-detail/activity-detail.component';
import { ActivityKpiComponent } from './activity/activity-kpi/activity-kpi.component';
import { SimulationKpiComponent } from './simulation/simulation-kpi/simulation-kpi.component';
import { ResourceDetailComponent } from './resources/resource-detail/resource-detail.component';

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
    ResourceOverviewComponent,
    ResourceKpiComponent,
    PieChartComponent,
    ActivityOverviewComponent,
    ActivityDetailComponent,
    ActivityKpiComponent,
    ResourceDetailComponent],
  providers: [
    FilesSelectedGuard
  ]
})
export class StatisticsModule { }
