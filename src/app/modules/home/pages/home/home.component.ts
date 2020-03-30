import { Component, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HeaderComponent } from '@app/shared/header/header.component';
//import { AuthService } from '@app/core/services/auth.service';
import { GlobalAnnouncementService } from '@app/core/services/global-announcement.service';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { FacebookService } from '@greg-md/ng-facebook';
import { FacebookLoginProvider, AuthService } from "angularx-social-login";
import { StudentService } from '@app/core/services/student.service';

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
  loggedIn = false;
  fbInitiated = false;
  FB_settings = {
    appId: '903187940138780',
    version: 'v6.0'
  };
  timeoutVar: any;

  @ViewChild('header') private myHeader: HeaderComponent;

  constructor(private cookieService: CookieService, private authFB: AuthService, private globalAnnouncementService: GlobalAnnouncementService, private authenticationService: AuthenticationService, private studentService: StudentService, private FB: FacebookService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  getCookie(key: string) {
    return this.cookieService.get(key);
  }

  ngOnInit() {

    /*
    Promise.resolve(decode(this.currentUser.token)).then((user) => {
      this.userPayload = user;
    });

    var userCookie = this.getCookie('user');
    this.globalAnnouncementService.fetchGlobalAnnouncements().subscribe((globalAnnouncementsData: any[]) => {
      this.globalAnnouncements = globalAnnouncementsData;
    })
    //console.log("The user cookie is: " + this.getCookie('user'));

    if (localStorage.getItem('user') == '')
      localStorage.setItem('user', userCookie);
    this.cookieService.delete('user');
    */
    if (!this.loggedIn) {
      this.waitingForFBLogin();
    }
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutVar);
    localStorage.clear();
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
        this.FB_id = user.id;
        this.FB_email = user.email;
        this.FB_fname = user.firstName;
        this.FB_lname = user.lastName;
        this.loggedIn = (user != null);
        if (this.loggedIn) {
          console.log("login successful.");
          // Check if user is in DB
          this.studentService.getStudentByEmail(this.FB_email).subscribe((data: any = {}) => {
            if (data) {
              this.FB_role = data[0].role; // Update role
            }
            var userData: JSON = <JSON><any>{
              "email": this.FB_email,
              "f_name": this.FB_fname,
              "l_name": this.FB_lname,
              "user_id": this.FB_id,
              "role": this.FB_role
            };

            if (data) {
              // Student found in DB, so their info is updated
              console.log("Student found in DB, updating info");
              this.studentService.updateStudent(this.FB_email, userData).subscribe();
              localStorage.setItem("FB_user", JSON.stringify(userData));
              console.log(JSON.stringify(userData));
            }
            else {
              // Student not found in DB, so student is added 
              console.log("Student not found in DB, adding");
              this.studentService.addStudent(userData).subscribe();
              localStorage.setItem("FB_user", JSON.stringify(userData));
              console.log(JSON.stringify(userData));
            }
          });





        }
      });
    });
  }
}
