import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ModulesComponent } from './modules/modules.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { CreateModuleComponent } from './modulesManagement/create-module/create-module.component';
import { EditModuleComponent } from './modulesManagement/edit-module/edit-module.component';
import { HomeEditComponent } from './home-edit/home-edit.component';
import { DiscussionComponent } from './modulesDiscussion/discussion/discussion.component';
import { CreateAnnouncementComponent } from './announcementsManagement/create-announcement/create-announcement.component';
import { AnnouncementsComponent } from './announcementsManagement/announcements/announcements.component';
import { EditAnnouncementComponent } from './announcementsManagement/edit-announcement/edit-announcement.component';
import { ViewCreatedAnnouncementsComponent } from './announcementsManagement/view-created-announcements/view-created-announcements.component';

import { AuthenticationService as AuthGuard } from '@app/core/services/authentication.service';

const routes: Routes = [
  { path: 'create-announcement', component: CreateAnnouncementComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin'}, pathMatch: 'full' },
  { path: 'view-created-announcements', component: ViewCreatedAnnouncementsComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin'}, pathMatch: 'full'},
  { path: 'edit-announcement/:announcementId', component: EditAnnouncementComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin'}, pathMatch: 'full'},
  { path: '', component: DashboardComponent, canActivate: [AuthGuard], pathMatch: 'full' },
  { path: ':id', component: HomeComponent, canActivate: [AuthGuard], pathMatch: 'full' },
  { path: ':id/announcements', component: AnnouncementsComponent, canActivate: [AuthGuard]},
  { path: ':id/modules', component: ModulesComponent, canActivate: [AuthGuard] },
  { path: ':id/leaderboard', component: LeaderboardComponent, canActivate: [AuthGuard] },
  { path: ':id/create-module', component: CreateModuleComponent, canActivate: [AuthGuard], data: { expectedRole: 'instructor'} },
  { path: ':id/edit-module/:moduleId', component: EditModuleComponent, canActivate: [AuthGuard], data: { expectedRole: 'instructor'} },
  { path: ':id/edit-home', component: HomeEditComponent, canActivate: [AuthGuard], data: { expectedRole: 'instructor'} },
  { path: ':id/discussion/:moduleId', component: DiscussionComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
