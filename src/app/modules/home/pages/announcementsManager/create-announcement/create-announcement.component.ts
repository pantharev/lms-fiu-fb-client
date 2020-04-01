import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { GlobalAnnouncementService } from '@app/core/services/global-announcement.service';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { Router } from '@angular/router';

import { User } from '@app/core/models/user';

import decode from 'jwt-decode';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.scss']
})
export class CreateAnnouncementComponent implements OnInit {

  public Editor = ClassicEditor;
  public editorData = "";
  currentUser: User;
  userPayload: User;
  isCleared;

  constructor(private globalAnnouncementService: GlobalAnnouncementService, private authenticationService: AuthenticationService, private router: Router) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit(): void {
    //this.userPayload = decode(this.currentUser.token);
    console.log(this.currentUser.f_name);
  }

  public onReady(editor){
    editor.setData("");
  }

  public onChange( { editor }: ChangeEvent){
    this.editorData = editor.getData();

    if(this.isCleared){
      editor.setData("");
      this.isCleared = false;
    }
    console.log(this.editorData);
  }

  createAnnouncement(){
    let userName = this.currentUser.f_name + " " + this.currentUser.l_name;
    let today = new Date();
    this.globalAnnouncementService.createGlobalAnnouncement(userName, this.editorData, today, today, this.currentUser.id).subscribe(() => {
      //alert("Created announcement");
      this.router.navigate(['/']);
    })
  }

}
