import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '@app/core/services/authentication.service';
import { FacebookService } from '@greg-md/ng-facebook';
import { FacebookLoginProvider, AuthService } from "angularx-social-login";
import { User } from '@app/core/models/user';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: User;
  currentUserAsync;
  FB_user: any;
  isAdmin: Promise<boolean>|null = null;
  tokenPayload: Promise<void | User>;
  timeoutVar: any;

  constructor(private router: Router, private authenticationService: AuthenticationService, private FB: FacebookService, private authFB: AuthService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    console.log("header OnInit");
    console.log(this.currentUser);
    //async
    this.currentUserAsync = this.authenticationService.currentUser;
    this.authenticationService.currentUser.subscribe((user) => {
        this.isAdmin = Promise.resolve(true);
    })

    //this.waitForCurrentUser();
    console.log(this.currentUser);
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
        this.isAdmin = Promise.resolve(true);
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
    this.authFB.signOut();
    this.router.navigate(['/login']);
  }

}
