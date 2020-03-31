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

  private userData;
  globalAnnouncements = [];
  currentUser;
  userPayload: User;

  FB_id;
  FB_fname: string;
  FB_lname: string;
  FB_email: string;
  FB_role: string;
  FB_User = {
    f_name: '',
    l_name: '',
    email: '',
    role: '',
    user_id: '',
    id: 0
  }
  loggedIn = false;
  fbInitiated = false;
  FB_settings = {
    appId: '903187940138780',
    version: 'v6.0'
  };
  timeoutVar: any;

  constructor(private cookieService: CookieService, private authFB: AuthService, private globalAnnouncementService: GlobalAnnouncementService, private authenticationService: AuthenticationService, private studentService: StudentService, private FB: FacebookService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  getCookie(key: string) {
    return this.cookieService.get(key);
  }

  ngOnInit() {

    console.log(this.currentUser);

    // fetch announcements
    this.globalAnnouncementService.fetchGlobalAnnouncements().subscribe((globalAnnouncementsData: any[]) => {
      this.globalAnnouncements = globalAnnouncementsData;
    })

    if (!this.currentUser) {
      this.waitingForFBLogin();
    } else{
      return;
    }
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

  waitingForFBLogin() {
    if (!(this.fbInitiated && this.loggedIn)) {
      // FB Initialization
      if (this.fbInitiated) {
        this.FB.init(this.FB_settings).subscribe(() => {
          console.log("fb initiated");
          this.fbInitiated = true;
        });
      }

      this.FBLogin();
    }
    else {
      this.timeoutVar = setTimeout(() => {
        this.waitingForFBLogin();
      }, 1000)
      clearTimeout(this.timeoutVar);
      return;
    }
  }


  FBLogin() {
    console.log("FBlogin");
    this.authFB.signIn(FacebookLoginProvider.PROVIDER_ID).then(() => {
      this.authFB.authState.subscribe((user) => {
        this.FB_User.user_id = user.id;
        this.FB_User.email = user.email;
        this.FB_User.f_name = user.firstName;
        this.FB_User.l_name = user.lastName;

        this.loggedIn = (user != null);
        if (this.loggedIn) {
          console.log("login successful.");
          // Check if user is in DB
          console.log(this.FB_User.email);
          let isNewStudent: Promise<Boolean>|null = null;
          this.studentService.getStudentByEmail(this.FB_User.email).subscribe((user: any) => {
            // In DB
            console.log(user);
            this.FB_User.role = user.role;
            this.FB_User.id = user.id;
            console.log(this.FB_User);
            this.inStudentDB(this.FB_User);
          }, (error) => {
            // Not in DB
            this.FB_User.role = 'student';
            this.notInStudentDB(this.FB_User);
          });
        }
      });
    });
  }

  inStudentDB(FBUser: any) {
    const userData: JSON = <JSON><any>{
      "email": FBUser.email,
      "f_name": FBUser.f_name,
      "l_name": FBUser.l_name,
      "role": FBUser.role,
      "user_id": FBUser.user_id,
      "id": FBUser.id
    };

    this.authenticationService.loginWithFB(userData);

    console.log("Student found in DB, updating info");
    this.studentService.updateStudent(this.FB_email, userData).subscribe(() => {
      console.log("updated student");
    });
    localStorage.setItem("FB_user", JSON.stringify(userData));
    console.log(JSON.stringify(userData));
  }

  notInStudentDB(FBUser: any){
    const userData: JSON = <JSON><any>{
      "email": FBUser.email,
      "f_name": FBUser.f_name,
      "l_name": FBUser.l_name,
      "user_id": FBUser.user_id,
      "id": FBUser.id,
      "role": FBUser.role
    };

    this.authenticationService.loginWithFB(userData);

    console.log("Student not found in DB, adding");
    this.studentService.addStudent(userData).subscribe(() => {
      console.log("added to db");
    });
    localStorage.setItem("FB_user", JSON.stringify(userData));
    console.log(JSON.stringify(userData));
  }
}
