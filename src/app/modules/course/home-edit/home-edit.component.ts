import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

import { CourseDetailsService } from '@app/core/services/course-details.service';

@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.component.html',
  styleUrls: ['./home-edit.component.scss']
})
export class HomeEditComponent implements OnInit {

  public Editor = ClassicEditor;
  public editorData;
  courseId;
  courseDetails: any;
  public courseContent;
  isCleared = false;

  constructor(private courseDetailsService: CourseDetailsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
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
      this.router.navigate(['courses', this.courseId]);
    });
  }

  onClearButtonClicked(id){
    let r = confirm("Clear content; Are you sure?");
    if(r){
      this.courseDetailsService.clearCourseDetails(id).subscribe(() => {
        alert("Cleared Content");
        this.isCleared = true;
        this.router.navigate(['courses', this.courseId]);
      })
    }
  }

}
