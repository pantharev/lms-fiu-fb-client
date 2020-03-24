import { Component, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HeaderComponent } from '@app/shared/header/header.component';
import { AuthService } from '@app/core/services/auth.service';
import { GlobalAnnouncementService } from '@app/core/services/global-announcement.service';
import { AuthenticationService } from '@app/core/services/authentication.service';

import { User } from '@app/core/models/user';
import decode from 'jwt-decode';

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

  constructor(private cookieService: CookieService, private authService: AuthService, private globalAnnouncementService: GlobalAnnouncementService, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  getCookie(key: string) {
    return this.cookieService.get(key);
  }

  ngOnInit() {
    Promise.resolve(decode(this.currentUser.token)).then((user) =>{
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
    //console.log("User: " + localStorage.getItem('currentUser'));
    //console.log("Localstorage is: " + localStorage.getItem('user'));


    console.log("Hello login");
    console.log("User info: " + this.authService.FBLogin2());
    this.authService.FBLogin2().subscribe((data) => {
      if(!data){
        console.log("Hey, you didn't access us from the tab!! Go ahead and type your email:");
        //return;
      }
      this.userData = data;
      console.log("cookie: " + this.getCookie("userData"));
      console.log(this.userData);
      console.log("The user data is: " + data);
    })

  }

  deleteAnnouncement(id){
    let r = confirm("Delete announcement: Are you sure?");
    if(r){
      this.globalAnnouncementService.deleteGlobalAnnouncement(id).subscribe(() => {
        alert("Deleted announcement");
      })
    }
  }

}
