import { Component, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HeaderComponent } from '@app/shared/header/header.component';
import {  AuthService } from '@app/core/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('header', { static: false }) private myHeader: HeaderComponent;

  constructor(private cookieService: CookieService, private authService: AuthService) { }

  getCookie(key: string) {
    return this.cookieService.get(key);
  }

  ngOnInit() {
    var userCookie = this.getCookie('user');
    //console.log("The user cookie is: " + this.getCookie('user'));
    if (localStorage.getItem('user') == '')
      localStorage.setItem('user', userCookie);
    this.cookieService.delete('user');
    console.log("User: " + localStorage.getItem('currentUser'));
    //console.log("Localstorage is: " + localStorage.getItem('user'));

    console.log("Hello login");
    console.log("User info: " + this.authService.FBLogin2());

  }

}
