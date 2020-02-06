import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CourseBrowserComponent } from './pages/course-browser/course-browser.component';


import { CourseService } from '../../core/services/course.service';
import { LoginComponent } from './pages/login/login.component';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import {MatIconModule, MatButtonModule, MatCardModule, MatOptionModule, MatAutocompleteModule, MatInputModule} from '@angular/material';
import { ProfileComponent } from './pages/profile/profile.component';

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('903187940138780')
  }

]);

export function provideConfig(){
  return config;
}

@NgModule({
  declarations: [HomeComponent, CourseBrowserComponent, LoginComponent, ProfileComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    NgbModule,
    SocialLoginModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatOptionModule,
    MatAutocompleteModule
  ],
  providers: [
    CourseService,
    {
    provide: AuthServiceConfig, 
    useFactory: provideConfig 
    }]
})
export class HomeModule { }
