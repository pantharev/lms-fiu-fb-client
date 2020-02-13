import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ModulesComponent } from './modules/modules.component';
import { CreateModuleComponent } from './modulesManagement/create-module/create-module.component';
import { EditModuleComponent } from './modulesManagement/edit-module/edit-module.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: ':id/modules', component: ModulesComponent },
  { path: ':id/create-module', component: CreateModuleComponent },
  { path: ':id/edit-module/:moduleId', component: EditModuleComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
