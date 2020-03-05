import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CourseBrowserComponent } from './pages/course-browser/course-browser.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { AuthenticationService as AuthGuard } from '@app/core/services/authentication.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'course-library', component: CourseBrowserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
