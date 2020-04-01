import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { GlobalAnnouncementService } from '@app/core/services/global-announcement.service';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '@app/core/models/user';

import decode from 'jwt-decode';

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.scss']
})
export class EditAnnouncementComponent implements OnInit {

  public Editor = ClassicEditor;
  public editorData;
  currentUser: User;
  userPayload: User;
  isCleared;
  id;
  public globalAnnouncement;
  globalAnnouncementDetails;

  constructor(private globalAnnouncementService: GlobalAnnouncementService, private authenticationService: AuthenticationService, private router: Router, private route: ActivatedRoute) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    //this.userPayload = decode(this.currentUser.token);
    this.route.params.subscribe((params) => {
      this.id = params.id;
    })
    this.globalAnnouncement = this.globalAnnouncementService.fetchGlobalAnnouncementById(this.id);
    //this.fetchAnnouncementById(this.id);
    console.log(this.currentUser.f_name);
  }

  public onChange( { editor }: ChangeEvent){
    this.editorData = editor.getData();

    if(this.isCleared){
      editor.setData("");
      this.isCleared = false;
    }
    console.log(this.editorData);
  }

  editAnnouncement(){
    let today = new Date();
    this.globalAnnouncementService.updateGlobalAnnouncement(this.id, this.editorData, today,).subscribe(() => {
      //alert("Created announcement");
      this.router.navigate(['/']);
    })
  }

  fetchAnnouncementById(id){
    this.globalAnnouncementService.fetchGlobalAnnouncementById(id).subscribe((globalAnnouncementData) => {
      this.globalAnnouncementDetails = globalAnnouncementData;
      console.log(globalAnnouncementData);
    })
  }

}
