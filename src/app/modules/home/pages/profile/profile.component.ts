import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileData = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe((data: any = []) => {
      this.profileData = Object.values(data);
      console.log(this.profileData);
      console.log("The profile data is: " + JSON.stringify(data));
    })

    /*this.authService.getTest().subscribe((data) => {
      this.testData = data;
      console.log(JSON.stringify(this.testData));
    })*/
  }

}
