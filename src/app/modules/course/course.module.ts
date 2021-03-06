import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';

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
import { CreatePostComponent } from './modulesDiscussion/create-post/create-post.component';
import { DiscussionComponent } from './modulesDiscussion/discussion/discussion.component';
import { EditPostComponent } from './modulesDiscussion/edit-post/edit-post.component';
import { CreateAnnouncementComponent } from './announcementsManagement/create-announcement/create-announcement.component';
import { AnnouncementsComponent } from './announcementsManagement/announcements/announcements.component';
import { EditAnnouncementComponent } from './announcementsManagement/edit-announcement/edit-announcement.component';
import { ViewCreatedAnnouncementsComponent } from './announcementsManagement/view-created-announcements/view-created-announcements.component';
import { QuizScoreComponent } from './quiz-score/quiz-score.component';
 
@NgModule({
  declarations: [ DashboardComponent, ModulesComponent, CreateModuleComponent, EditModuleComponent, SidebarComponent, SidebarButtonComponent, LeaderboardComponent, HomeComponent, HomeEditComponent, DiscussionComponent, CreatePostComponent, EditPostComponent, CreateAnnouncementComponent, AnnouncementsComponent, EditAnnouncementComponent, ViewCreatedAnnouncementsComponent, QuizScoreComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    CKEditorModule,
    MatTooltipModule,
    MatInputModule
  ]
})
export class CourseModule { }
