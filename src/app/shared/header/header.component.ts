import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '@app/core/services/authentication.service';
import { FacebookService } from '@greg-md/ng-facebook';
import { FacebookLoginProvider, AuthService } from "angularx-social-login";
import { User } from '@app/core/models/user';
import decode from 'jwt-decode';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: User;
  FB_user: any;
  tokenPayload: Promise<void | User>;

  constructor(private router: Router, private authenticationService: AuthenticationService, private FB: FacebookService, private authFB: AuthService) {
    //this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    console.log("header OnInit");
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
    })

    this.FB_user = JSON.parse(localStorage.getItem("FB_user"));
    console.log(this.FB_user.role);
  }

  ngOnChanges() {
    console.log("header OnChanges");
  }

  ngDoCheck() {
    console.log("header DoCheck");
  }

  ngAfterViewInit() {
    console.log("header AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("header AfterViewChecked");
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
