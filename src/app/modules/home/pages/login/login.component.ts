import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { FacebookService } from '@greg-md/ng-facebook';
import { FacebookLoginProvider, AuthService } from "angularx-social-login";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  FB_id: string;
  FB_email: string;
  FB_name: string;
  FB_settings = {
    appId: '903187940138780',
    version: 'v6.0'
  };

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService, private FB: FacebookService, private authFB: AuthService) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //console.log(this.returnUrl);

    this.FB.init(this.FB_settings).subscribe();
    console.log("fb initiated");
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit(email, password) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    //this.loading = true;
    this.authenticationService.login(email, password)// this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        (data) => {
          console.log(data);
          //this.loading = false;
          this.router.navigate([this.returnUrl]);
        },
        (error) => {
          this.error = error;
        }
      );
  }

  FBLogin() {

    console.log("FBlogin");
    console.log(this.FB_id);
    /*
    this.FB.login({scope: 'email'}).subscribe(auth => {
      this.FB_id = auth.userID;
    });
    */

    this.authFB.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authFB.authState.subscribe((user) => {
      this.FB_id = user.id;
      this.FB_email = user.email;
      this.FB_name = user.name;
    })
    console.log(this.FB_id);
    console.log(this.FB_email);
    localStorage.setItem("FB_email", this.FB_email);
    localStorage.setItem("FB_id", this.FB_id);
    localStorage.setItem("FB_name", this.FB_name);
  }
}










/*import { Component, OnInit } from '@angular/core';
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

  }

  signOut(): void {
    this.authService.FBLogOut();
    //sessionStorage.clear();
  }
  // FBFacebook

  ngOnInit() {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });

  }
}*/
