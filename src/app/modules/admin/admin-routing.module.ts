import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { PendingEnrollmentComponent } from './pending-enrollment/pending-enrollment.component';

import { AuthenticationService as AuthGuard } from '@app/core/services/authentication.service';
import { PromotionComponent } from './promotion/promotion.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  { path: 'create-course', component: CreateCourseComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  { path: 'edit-course/:id', component: EditCourseComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  { path: 'pending-enrollment/:id', component: PendingEnrollmentComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  { path: 'promotion', component: PromotionComponent, canActivate: [AuthGuard], data: {expectedRole: 'admin' } }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
