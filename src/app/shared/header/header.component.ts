import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '@app/core/services/authentication.service';
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

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    //this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
    })

    this.FB_user = JSON.parse(localStorage.getItem("FB_user"));
    /*this.tokenPayload = Promise.resolve(decode(this.currentUser.then((val)=>{
      val.token;
    }))).then(() => {
      console.log("Got token");
    });
  });*/
    //console.log("CurrentUser: " + JSON.stringify(this.currentUser));
    /*if(this.currentUser)
      var myInterval = setTimeout(() => {
        console.log("User Header0: " + this.currentUser.token);
      //console.log("User Header: " + localStorage.getItem('currentUser'));
      if(this.authenticationService.currentUserValue){
        this.tokenPayload = decode(this.currentUser.token);
      }
      }, 1000);*/
    //const currentUserValue = this.authenticationService.currentUserValue;
    //console.log("User Header0: " + this.currentUser.token);
    //console.log("User Header: " + localStorage.getItem('currentUser'));
    /*if(this.authenticationService.currentUserValue){
      this.userExists = true;
      this.tokenPayload = decode(this.currentUser.token);
    }*/
    /*this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
      this.tokenPayload = decode(this.currentUser.token);
    });*/
    //this.currentUser = this.authenticationService.currentUserValue;
    //this.tokenPayload = decode(this.currentUser.token);
    //console.log(this.tokenPayload.f_name);
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
    this.authenticationService.logout().subscribe(() => {
      console.log("Logged out");
      this.router.navigate(['/login']);
    });
    //this.router.navigate(['/login']);
  }

}
