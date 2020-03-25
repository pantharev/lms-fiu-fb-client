import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { FacebookService } from '@greg-md/ng-facebook';
import { FacebookLoginProvider, AuthService } from "angularx-social-login";
import { StudentService } from '@app/core/services/student.service';

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

  FB_id;
  FB_fname: string;
  FB_lname: string;
  FB_email: string;
  loggedIn = false;
  fbInitiated = false;
  FB_settings = {
    appId: '903187940138780',
    version: 'v6.0'
  };

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService, private FB: FacebookService, private authFB: AuthService, private studentService: StudentService) {
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
    if (!this.fbInitiated) {
      this.FB.init(this.FB_settings).subscribe();
      console.log("fb initiated");
      this.fbInitiated = true;
    }

    if (!this.loggedIn) {
      this.FBLogin();
      setTimeout(() => {
        console.log("loggedIn: " + this.loggedIn);
        if (this.loggedIn) {
          console.log("login successful. Info:");
          console.log(this.FB_email);
          console.log(this.FB_id);
          console.log(this.FB_fname);
          console.log(this.FB_lname);

          var userData = {
            "email": this.FB_email,
            "f_name": this.FB_fname,
            "l_name": this.FB_lname,
            "user_id": this.FB_id,
          };

          // Database functions

          let temp = this.studentService.getStudentById(this.FB_id);
          console.log(temp);
          if (temp != null) {
            console.log("successfully found student with ID " + this.FB_id + ". Updating info...");
            this.studentService.updateStudent(this.FB_id, userData);
          }
          else {
            console.log("No student found with ID: " + this.FB_id + ". Creating student...");
            this.studentService.addStudent(userData);
          }
        }
        else {
          console.log("login failed");
        }
      }, 1000);
    }
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
    this.authFB.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authFB.authState.subscribe((user) => {
      this.FB_id = user.id;
      this.FB_email = user.email;
      this.FB_fname = user.firstName;
      this.FB_lname = user.lastName;
      this.loggedIn = (user != null);
    });
    console.log(this.FB_id);
    console.log(this.FB_email);
    //localStorage.setItem("FB_email", this.FB_email);
    //localStorage.setItem("FB_id", this.FB_id);
    //localStorage.setItem("FB_name", this.FB_name);
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
