import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private cookieService: CookieService) { }

  getCookie(key: string){
    return this.cookieService.get(key);
  }

  ngOnInit() {
    var userCookie = this.getCookie('user');
    console.log("The user cookie is: " + this.getCookie('user'));
    if(localStorage.getItem('user') == '')
      localStorage.setItem('user', userCookie);
    this.cookieService.delete('user');
    console.log("Localstorage is: " + localStorage.getItem('user'));
  }

}
