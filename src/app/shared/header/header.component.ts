import { Component, OnInit } from '@angular/core';
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
export class HeaderComponent implements OnInit {

  currentUser: Promise<User>;
  currentUserAsync;
  FB_user: any;
  isAdmin: boolean;
  tokenPayload: Promise<void | User>;

  constructor(private router: Router, private authenticationService: AuthenticationService, private FB: FacebookService, private authFB: AuthService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = Promise.resolve(x));
  }

  ngOnInit() {
    console.log("header OnInit");
    this.currentUser.then((user) => {
      console.log("ngOnInit");
      console.log(user);
      this.isAdmin = true;
    })
    this.currentUserAsync = this.authenticationService.currentUser.subscribe();
  }

  ngOnChanges(){
    this.authenticationService.currentUser.subscribe(x => this.currentUser = Promise.resolve(x));
    this.currentUser.then((user) => {
      console.log("ngOnChanges");
      console.log(user);
      this.isAdmin = true;
    })
    this.currentUserAsync = this.authenticationService.currentUser.subscribe();
  }

  ngAfterViewInit() {
    this.FB_user = JSON.parse(localStorage.getItem("FB_user"));
    if (this.FB_user) {
      if (this.FB_user.role == "admin") {
        this.isAdmin = true;
      }
    }
  }


  /*reInit(){
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
      //this.tokenPayload = decode(this.currentUser.token);
    });
    //console.log("CurrentUser: " + JSON.stringify(this.currentUser));
    if(this.currentUser)
      var myInterval = setTimeout(() => {
        console.log("User Header0: " + this.currentUser.token);
      //console.log("User Header: " + localStorage.getItem('currentUser'));
      if(this.authenticationService.currentUserValue){
        this.tokenPayload = decode(this.currentUser.token);
      }
      }, 1000);
  }*/

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
