import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';

import { CourseRoutingModule } from './course-routing.module';
import { ModulesComponent } from './modules/modules.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarButtonComponent } from './sidebar-button/sidebar-button.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
 
@NgModule({
  declarations: [ DashboardComponent, ModulesComponent, SidebarComponent, SidebarButtonComponent, LeaderboardComponent ],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
