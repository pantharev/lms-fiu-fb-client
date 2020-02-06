import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { PendingEnrollmentComponent } from './pending-enrollment/pending-enrollment.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'create-course', component: CreateCourseComponent },
  { path: 'edit-course/:id', component: EditCourseComponent },
  { path: 'pending-enrollment/:id', component: PendingEnrollmentComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
