import { Component, OnInit } from '@angular/core';
import { AuthService} from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private authService: AuthService) { }

  signInWithFB(): void {
    this.authService.FBFacebook().subscribe((data) => {
      console.log(data);
    });
    //sessionStorage.setItem("user_fname",this.user.firstName);
    //sessionStorage.setItem("user_lname",this.user.lastName);
  }

  signOut(): void {
    this.authService.FBLogOut();
    //sessionStorage.clear();
  }
  // FBFacebook 

  ngOnInit() {
    /*
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
    */
  }
}
