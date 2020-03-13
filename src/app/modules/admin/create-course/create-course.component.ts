import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CourseService } from '../../../core/services/course.service';
import { CourseDetailsService } from '@app/core/services/course-details.service';

import { Course } from '@app/core/models/course.model';
@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  courseForm: FormGroup;
  labels = ['name', 'description', 'seats', 'start_date', 'end_date'];

  constructor(private courseService: CourseService, private courseDetailsService: CourseDetailsService, private fb: FormBuilder, private router: Router) {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      seats: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  addCourse(name, description, seats, start_date, end_date) {
    if(this.courseForm.valid)
    this.courseService.addCourse(name, description, seats, start_date, end_date).subscribe((course: Course) => {
      //console.log("course: " + JSON.stringify(course));
      this.courseDetailsService.createCourseDetails(course.id, "<p>Recommended inputs: Course Name, Instructor Name, Office (location/hours), Phone number, and email.</p>").subscribe(() => {
        console.log("course details created");
      });
      this.router.navigate(['/admin']);
    });
    else alert('Missing required fields!');
  }

}
