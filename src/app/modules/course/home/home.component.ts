import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

import { AuthenticationService } from '@app/core/services/authentication.service';
import { CourseDetailsService } from '@app/core/services/course-details.service';

import decode from 'jwt-decode';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public Editor = ClassicEditor;
  public editorData;
  courseId;
  courseDetails: any;
  public courseContent;
  isCleared = false;
  currentUser;
  tokenPayload;
  isAdmin;
  isInstructor;
  isStudent;

  constructor(private courseDetailsService: CourseDetailsService, private route: ActivatedRoute, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit() {

    this.tokenPayload = decode(this.currentUser.token);
    this.isAdmin = (this.tokenPayload.role === "admin");
    this.isInstructor = (this.tokenPayload.role === "instructor");
    this.isStudent = (this.tokenPayload.role === "student");

    this.route.params.subscribe((params) => {
      this.courseId = params.id;
      //console.log("Params id: " + params.id);
    })
    this.courseContent = this.courseDetailsService.getCourseDetails(this.courseId);

    this.courseDetailsService.getCourseDetails(this.courseId).subscribe((data: any) => {
      this.courseDetails = data;
      //console.log(data);
    })
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

  onSubmit(id){
    this.courseDetailsService.updateCourseDetails(id, this.editorData).subscribe(() => {
      alert("Submitted Content");
    });
  }

  onClearButtonClicked(id){
    let r = confirm("Clear content; Are you sure?");
    if(r){
      this.courseDetailsService.clearCourseDetails(id).subscribe(() => {
        alert("Cleared Content");
        this.isCleared = true;
      })
    }
  }

}
