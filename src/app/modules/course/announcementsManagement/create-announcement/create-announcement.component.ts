import { Component, OnInit } from '@angular/core';

import { AnnouncementService } from '@app/core/services/announcement.service';
import { CourseAnnouncementService } from '@app/core/services/course-announcement.service';
import { CourseService } from '@app/core/services/course.service';
import { Subscription } from 'rxjs';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
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

  checkedCourses: number[] = [];
  subscription: Subscription;

  public Editor = ClassicEditor;
  public editorData = "";
  currentUser: User;
  userPayload: User;
  isCleared;
  courses: any[] = [];

  constructor(private announcementService: AnnouncementService, private courseAnnouncementService: CourseAnnouncementService, private authenticationService: AuthenticationService, private courseService: CourseService, private router: Router) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit(): void {
    //this.userPayload = decode(this.currentUser.token);
    console.log(this.currentUser.f_name);

    this.subscription = this.announcementService.sharedCheckedCourses.subscribe((checkedCourses: number[]) => {
      this.checkedCourses = checkedCourses;
      console.log(checkedCourses);
      this.checkedCourses.forEach((courseId, i, arr) => {
        this.courseService.getCourseById(courseId).subscribe((course: any) => {
          this.courses[i] = course;
          console.log(course);
        })
      })
    }, (error) =>{
      console.log(error);
    }, () => {
      console.log("complete");
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
    let user = this.currentUser.f_name + " " + this.currentUser.l_name;
    let today =  new Date();
    this.announcementService.createAnnouncement(user, this.editorData, today, today, this.currentUser.id).subscribe((announcement: any) => {
      console.log(announcement);
      for(let i = 0; i < this.checkedCourses.length; i++){
        let courseId = this.checkedCourses[i];
        this.courseAnnouncementService.createCourseAnnouncement(courseId, announcement.id).subscribe((courseAnnouncement) => {
          console.log(courseAnnouncement);
        });
      }
      alert("Created announcement successfully");
    });
  }

}
