import { Component, OnInit, OnChanges, Input, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '@app/core/services/authentication.service';
import { FacebookService } from '@greg-md/ng-facebook';
import { FacebookLoginProvider, AuthService } from "angularx-social-login";
import { User } from '@app/core/models/user';
import decode from 'jwt-decode';
import { identifierModuleUrl } from '@angular/compiler';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges, AfterViewChecked {

  currentUser: User;
  currentUserAsync;
  FB_user: any;
  isAdmin: boolean;
  tokenPayload: Promise<void | User>;
  timeoutVar: any;

  constructor(private router: Router, private authenticationService: AuthenticationService, private FB: FacebookService, private authFB: AuthService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    console.log("header OnInit");
    console.log(this.currentUser);
    /*
    if(this.currentUser.role == "admin"){
      this.isAdmin = true;
    }
    this.currentUserAsync = this.authenticationService.currentUser;
    */
    this.waitForCurrentUser();
    console.log(this.currentUser);
  }

  ngOnChanges() {
    this.authenticationService.currentUser.subscribe(x => {
      console.log("header on changes subscribed");
      this.currentUser = x;
      console.log(this.currentUser);
    });
    console.log("header on changes");
    console.log(this.currentUser);
    if (this.currentUser.role == "admin") {
      this.isAdmin = true;
    }
    this.currentUserAsync = this.authenticationService.currentUser.subscribe();
  }

  ngAfterViewChecked() {
    /*
    if (!this.currentUser){
      this.authenticationService.currentUser.subscribe(x => {
        console.log("header on changes subscribed");
        this.currentUser = x;
        console.log(this.currentUser);
      });
      console.log("header on changes");
      console.log(this.currentUser);
      if (this.currentUser.role == "admin") {
        this.isAdmin = true;
      }
      this.currentUserAsync = this.authenticationService.currentUser.subscribe();
    }
    */
  }

  waitForCurrentUser() {
    if (this.currentUser) {
      this.authenticationService.currentUser.subscribe(x => {
        console.log("header on changes subscribed");
        this.currentUser = x;
        console.log(this.currentUser);
      });
      console.log("header on changes");
      console.log(this.currentUser);
      if (this.currentUser.role == "admin") {
        this.isAdmin = true;
      }
      this.currentUserAsync = this.authenticationService.currentUser;
      console.log("currentUserAsync set");
    }
    else {
      this.timeoutVar = setTimeout(() => {
        this.waitForCurrentUser();
      }, 1000)
    }
  }
  logout() {
    /*
    this.authenticationService.logout().subscribe(() => {
      console.log("Logged out");
      this.router.navigate(['/login']);
    });
    //this.router.navigate(['/login']);
    */
    this.authFB.signOut();
    this.router.navigate(['/login']);
  }

}
