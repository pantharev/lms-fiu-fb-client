import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CourseBrowserComponent } from './pages/course-browser/course-browser.component';


import { CourseService } from '../../core/services/course.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreateAnnouncementComponent } from './pages/announcementsManager/create-announcement/create-announcement.component';
import { EditAnnouncementComponent } from './pages/announcementsManager/edit-announcement/edit-announcement.component';

import { FacebookModule } from '@greg-md/ng-facebook';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('903187940138780')
  }

]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [HomeComponent, CourseBrowserComponent, ProfileComponent, CreateAnnouncementComponent, EditAnnouncementComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatOptionModule,
    MatAutocompleteModule,
    CKEditorModule,
    FacebookModule
  ],
  providers: [
    CourseService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }]
})
export class HomeModule { }
