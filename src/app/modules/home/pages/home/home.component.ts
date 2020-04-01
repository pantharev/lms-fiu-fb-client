import { Component, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HeaderComponent } from '@app/shared/header/header.component';
//import { AuthService } from '@app/core/services/auth.service';
import { GlobalAnnouncementService } from '@app/core/services/global-announcement.service';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { FacebookService } from '@greg-md/ng-facebook';
import { FacebookLoginProvider, AuthService } from "angularx-social-login";
import { StudentService } from '@app/core/services/student.service';
import { isEmpty } from 'lodash';

import { User } from '@app/core/models/user';
import decode from 'jwt-decode';
import { timeout } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  globalAnnouncements = [];
  currentUser;
  userPayload: User;
  timeoutVar: any;

  constructor(private cookieService: CookieService, private authFB: AuthService, private globalAnnouncementService: GlobalAnnouncementService, private authenticationService: AuthenticationService, private studentService: StudentService, private FB: FacebookService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  getCookie(key: string) {
    return this.cookieService.get(key);
  }

  ngOnInit() {
    // fetch announcements
    this.globalAnnouncementService.fetchGlobalAnnouncements().subscribe((globalAnnouncementsData: any[]) => {
      this.globalAnnouncements = globalAnnouncementsData;
    })
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutVar);
    //localStorage.clear();
  }

  deleteAnnouncement(id) {
    let r = confirm("Delete announcement: Are you sure?");
    if (r) {
      this.globalAnnouncementService.deleteGlobalAnnouncement(id).subscribe(() => {
        alert("Deleted announcement");
      })
    }
  }
}
