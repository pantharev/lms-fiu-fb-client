import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';

import { CourseRoutingModule } from './course-routing.module';
import { ModulesComponent } from './modules/modules.component';
 
@NgModule({
  declarations: [ DashboardComponent, ModulesComponent ],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
