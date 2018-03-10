import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StatisticsComponent } from './statistics.component';
import { DashboardComponent } from './simulation/dashboard/dashboard.component';
import { FilesSelectedGuard } from '../guards/files-selected.guard';
import {RessourcesComponent} from './ressource/ressources/ressources.component';
import {ActivityComponent} from './activity/activity-detail/activity.component';
import {ActivitiesComponent} from './activity/activities/activities.component';

export const ROUTES = [
  {
    path: 'statistics',
    component: StatisticsComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'ressources', component: RessourcesComponent },
      { path: 'activities', component: ActivitiesComponent },
      { path: 'activities/:activity_id', component: ActivityComponent}

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
