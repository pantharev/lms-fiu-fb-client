import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CourseService } from '../../../core/services/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  id: number;
  course: any = {};
  updateForm: FormGroup;

  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
      this.CreateForm();
   }

  CreateForm() {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      seats: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.courseService.getCourseById(this.id).subscribe(res => {
        this.course = res;

        console.log(this.course.start_date);

        this.hDateFormat(this.course);

        console.log(this.course.start_date);

        this.updateForm.get('name').setValue(this.course.name);
        this.updateForm.get('description').setValue(this.course.description);
        this.updateForm.get('seats').setValue(this.course.seats);
        this.updateForm.get('start_date').setValue(this.course.start_date);
        this.updateForm.get('end_date').setValue(this.course.end_date);
      });
    });
  }

  updateCourse(name, description, seats, start_date, end_date) {
    if(this.updateForm.valid)
    this.courseService.updateCourse(this.id, name, description, seats, start_date, end_date).subscribe(res => {
      alert('Course updated successfully');
    });
    else alert('Missing required fields!');
  }

  hDateFormat(course) {
    let start_date = new Date(course.start_date.toString());
    let end_date = new Date(course.end_date.toString());

    course.start_date = start_date.toLocaleDateString();
    course.end_date = end_date.toLocaleDateString();
  }
}
