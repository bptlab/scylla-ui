import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StatisticsComponent } from './statistics.component';
import { SimulationOverviewComponent } from './simulation/simulation-overview/simulation-overview.component';
import { FilesSelectedGuard } from '../guards/files-selected.guard';
import { ResourceOverviewComponent } from './resources/resource-overview/resource-overview.component';
import { ActivityDetailComponent } from './activity/activity-detail/activity-detail.component';
import { ActivityOverviewComponent} from './activity/activity-overview/activity-overview.component';
import { ResourceDetailComponent } from './resources/resource-detail/resource-detail.component';

export const ROUTES = [
  {
    path: 'statistics',
    component: StatisticsComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'simulation-overview' },
      { path: 'simulation-overview', component: SimulationOverviewComponent },
      { path: 'resource-overview', component: ResourceOverviewComponent },
      { path: 'activity-overview', component: ActivityOverviewComponent },
      { path: 'activity/:activity_name', component: ActivityDetailComponent},
      { path: 'resources/:resource_type', component: ResourceDetailComponent}
    ],
    canActivate: [ FilesSelectedGuard ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class StatisticsRoutingModule { }
