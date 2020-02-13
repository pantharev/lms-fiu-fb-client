import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';

import { CourseRoutingModule } from './course-routing.module';
import { ModulesComponent } from './modules/modules.component';
import { CreateModuleComponent } from './modulesManagement/create-module/create-module.component';
import { EditModuleComponent } from './modulesManagement/edit-module/edit-module.component';
 
@NgModule({
  declarations: [ DashboardComponent, ModulesComponent, CreateModuleComponent, EditModuleComponent ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class CourseModule { }
