import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './core/services/authentication.service';
import { StudentService } from './core/services/student.service';
import { User } from './core/models/user';
import { FacebookService } from '@greg-md/ng-facebook';
import { FacebookLoginProvider, AuthService } from "angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: User;
  title = 'LMS-FIU';

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


  constructor(private router: Router, private authenticationService: AuthenticationService, private studentService: StudentService,
    private FB: FacebookService, private authFB: AuthService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {

    console.log("app.component init2");
    this.FB.init(this.FB_settings).subscribe(() => {
      console.log("fb initiated");
      this.waitingForFBLogin();
    });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.authenticationService.logoutFromFB();
  }

  waitingForFBLogin() {
    console.log("waiting for FB login");
    console.log("Logged in: " + this.loggedIn);
    if (!this.loggedIn) {
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
    console.log("FBlogin-appc");
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
          let isNewStudent: Promise<Boolean> | null = null;
          this.studentService.getStudentByEmail(this.FB_User.email).subscribe((user: any) => {
            // In DB
            console.log(user);
            this.FB_User.role = user[0].role;
            this.FB_User.id = user[0].id;
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
    console.log(this.currentUser.role);
    this.studentService.updateStudent(this.FB_email, userData).subscribe(() => {
      console.log("updated student");
    });
    localStorage.setItem("FB_user", JSON.stringify(userData));
    console.log(JSON.stringify(userData));
  }

  notInStudentDB(FBUser: any) {
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
