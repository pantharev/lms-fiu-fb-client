import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { DashboardComponent } from './dashboard/dashboard.component';

import { CourseRoutingModule } from './course-routing.module';
import { ModulesComponent } from './modules/modules.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarButtonComponent } from './sidebar-button/sidebar-button.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { CreateModuleComponent } from './modulesManagement/create-module/create-module.component';
import { EditModuleComponent } from './modulesManagement/edit-module/edit-module.component';
import { HomeComponent } from './home/home.component';
import { HomeEditComponent } from './home-edit/home-edit.component';
 
 
@NgModule({
  declarations: [ DashboardComponent, ModulesComponent, CreateModuleComponent, EditModuleComponent, SidebarComponent, SidebarButtonComponent, LeaderboardComponent, HomeComponent, HomeEditComponent ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    CKEditorModule
  ]
})
export class CourseModule { }
