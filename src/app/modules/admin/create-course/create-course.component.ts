import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CourseService } from '../../../core/services/course.service';
import { CourseDetailsService } from '@app/core/services/course-details.service';

import { Course } from '@app/core/models/course.model';
import { start } from 'repl';
@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  courseForm: FormGroup;
  labels = ['name', 'description', 'seats', 'start_date', 'end_date'];
  submitted = false;
  todayDate: Promise<string>|null = null;
  startDateEvent: Promise<String>|null = null;
  endDateEvent: Promise<String>|null = null;
  startDateSelected = false;
  endDateSelected = false;

  constructor(private courseService: CourseService, private courseDetailsService: CourseDetailsService, private fb: FormBuilder, private router: Router) {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      seats: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required]
    });
   }

  get c() { return this.courseForm.controls; }

  ngOnInit() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    this.todayDate = new Promise<string>((resolve, reject) => { resolve(mm + '/' + dd + '/' + yyyy); });
    //this.todayDate = mm + '/' + dd + '/' + yyyy;
    //console.log(this.todayDate);
  }

  addCourse(name, description, seats, start_date, end_date) {
    this.submitted = true;

    start_date = this.formatDate(start_date);
    console.log("going to submit start_date: " + start_date);

    end_date = this.formatDate(end_date);
    console.log("going to submit end_date: " + end_date);

    if(!this.courseForm.valid){
      return;
    }

    this.courseService.addCourse(name, description, seats, start_date, end_date).subscribe((course: Course) => {
      //console.log("course: " + JSON.stringify(course));
      this.courseDetailsService.createCourseDetails(course.id, "<p>Recommended inputs: Course Name, Instructor Name, Office (location/hours), Phone number, and email.</p>").subscribe(() => {
        console.log("course details created");
      });
      this.router.navigate(['/admin']);
    });
  }

  onStartDateSelect(event){
    console.log("startDateSelected");
    this.startDateEvent = new Promise<String>((resolve, reject) => {
      resolve(String(event.month).padStart(2, '0') + '/' + String(event.day).padStart(2, '0') + '/' + event.year);
    });
    this.startDateSelected = true;
  }

  onEndDateSelect(event){
    console.log("endDateSelected");
    this.endDateEvent = new Promise<String>((resolve, reject) => {
      resolve(String(event.month).padStart(2, '0') + '/' + String(event.day).padStart(2, '0') + '/' + event.year);
    });
    this.endDateSelected = true;
  }

  formatDate(date){
    let newDate = new Date(date);
    let dd = String(newDate.getDate()).padStart(2, '0');
    let mm = String(newDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = newDate.getFullYear();

    let dateRes: String = yyyy + '-' + mm + '-' + dd;
    return dateRes;
  }

}
