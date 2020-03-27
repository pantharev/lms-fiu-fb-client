import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AnnouncementService } from '@app/core/services/announcement.service';

import { Observable, Subscription } from 'rxjs';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { AuthenticationService } from '@app/core/services/authentication.service';

import { User } from '@app/core/models/user';

import decode from 'jwt-decode';
@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.scss']
})
export class EditAnnouncementComponent implements OnInit {

  announcementId: Promise<number>;
  announcement: Observable<Object>;
  announcements: Promise<Object>;

  public Editor = ClassicEditor;
  public editorData;

  subscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.announcementId = Promise.resolve(params.announcementId);
    })

    this.announcementId.then((id) => {
      console.log(id);
      this.announcement = this.announcementService.fetchAnnouncementById(id);
    })

    this.subscription = this.announcementService.sharedEditCourses.subscribe((announcements: Object[]) => {
      console.log("announcements edit: \n");
      console.log(announcements);
      this.announcements = Promise.resolve(announcements);
    })
  }

  ngAfterViewInit(){
    this.subscription.unsubscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public onChange( { editor }: ChangeEvent){
    this.editorData = editor.getData();
    console.log(this.editorData);
  }

  editAnnouncement(){
    if(!this.editorData){
      this.announcement.subscribe((announcement: any) => {
        console.log(announcement.content);
        this.announcementId.then((id) => {
          this.announcementService.updateAnnouncement(id, announcement.content, new Date()).subscribe(() => {
            alert("Updated announcement");
            this.router.navigate(['/courses/view-created-announcements']);
          })
        })
      })
    } else{
      this.announcementId.then((id) => {
        this.announcementService.updateAnnouncement(id, this.editorData, new Date()).subscribe(() => {
          alert("Updated announcement");
          this.router.navigate(['/courses/view-created-announcements']);
        })
      })
    }
  }

}
