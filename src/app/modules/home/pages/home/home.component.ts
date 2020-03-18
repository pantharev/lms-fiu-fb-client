import { Component, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HeaderComponent } from '@app/shared/header/header.component';
import { LocalStorage } from 'node-localstorage';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('header', { static: false }) private myHeader: HeaderComponent;

  constructor(private cookieService: CookieService) { }

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
    console.log("user ID " + LocalStorage.getItem('userId'));
    console.log("user Token: " + LocalStorage.getItem('userToken'));
  }

}
