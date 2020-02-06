import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe((data) => {
      console.log("The profile data is: " + JSON.stringify(data));
    })
  }

}
