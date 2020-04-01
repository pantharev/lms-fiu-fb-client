import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CourseBrowserComponent } from './pages/course-browser/course-browser.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreateAnnouncementComponent } from './pages/announcementsManager/create-announcement/create-announcement.component';

import { AuthenticationService as AuthGuard } from '@app/core/services/authentication.service';
import { EditAnnouncementComponent } from './pages/announcementsManager/edit-announcement/edit-announcement.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'course-library', component: CourseBrowserComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'create-announcement', component: CreateAnnouncementComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin'} },
  { path: 'edit-announcement/:id', component: EditAnnouncementComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin'} }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
