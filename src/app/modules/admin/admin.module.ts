import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule } from '@angular/material/select';

import { CreateCourseComponent } from './create-course/create-course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { PendingEnrollmentComponent } from './pending-enrollment/pending-enrollment.component';
import { PromotionComponent } from './promotion/promotion.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';



@NgModule({
  declarations: [CreateCourseComponent, DashboardComponent, EditCourseComponent, PendingEnrollmentComponent, PromotionComponent, SidebarAdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    MatSelectModule
  ]
})
export class AdminModule { }
