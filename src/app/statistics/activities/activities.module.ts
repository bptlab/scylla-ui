import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ActivitiesComponent} from './activities.component';
import {ActivityComponent} from '../activity/activity.component';

// TODO include guard
const activityRoutes: Routes = [
  {path: 'activity', component: ActivitiesComponent },
  {path: 'activity/:activity_id', component: ActivityComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(activityRoutes),
  ],
  declarations: [
    ActivityComponent,
    ActivitiesComponent,
  ]
})
export class ActivitiesModule { }
