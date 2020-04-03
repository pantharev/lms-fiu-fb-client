import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Course } from '@app/core/models/course.model';
import { CourseService } from '../../../core/services/course.service';
import { StudentCourseService } from '@app/core/services/student-course.service';
import { StudentService } from '@app/core/services/student.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  id: number;
  course: Course;
  updateForm: FormGroup;
  submitted = false;
  startDate: Promise<string> | null = null;
  startDateSelected = false;
  startDateEvent: Promise<String> | null = null;
  endDate: Promise<string> | null = null;
  endDateSelected = false;
  endDateEvent: Promise<String> | null = null;
  instructors: Observable<any>;
  oldInstructor: String;
  oldInstructorId: number;

  constructor(private courseService: CourseService, private studentCourseService: StudentCourseService, private studentService: StudentService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.CreateForm();
  }

  CreateForm() {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      instructor: ['', Validators.required],
      description: ['', Validators.required],
      seats: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required]
    });
  }

  get cu() { return this.updateForm.controls; }

  ngOnInit() {
    this.instructors = this.studentService.getInstructors();
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.courseService.getCourseById(this.id).subscribe((res: Course) => {
        this.course = res;

        //console.log(this.course.start_date);

        this.hDateFormat(this.course);

        //console.log(this.course.start_date);

        this.updateForm.get('name').setValue(this.course.name);
        this.updateForm.get('description').setValue(this.course.description);
        this.updateForm.get('seats').setValue(this.course.seats);

        this.studentCourseService.getInstructorByCourseId(this.id).subscribe((instructor: any) => {
          console.log(instructor);
          //this.updateForm.get('instructor').setValue(instructor.email);
          this.oldInstructor = instructor.email;
          this.oldInstructorId = instructor.student_id;
        })
        let newDate = new Date(this.course.start_date.toString());
        let dd = String(newDate.getDate()).padStart(2, '0');
        let mm = String(newDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = newDate.getFullYear();

        this.startDate = new Promise<string>((resolve, reject) => { resolve(mm + '/' + dd + '/' + yyyy); });

        newDate = new Date(this.course.end_date.toString());
        dd = String(newDate.getDate()).padStart(2, '0');
        mm = String(newDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        yyyy = newDate.getFullYear();

        this.endDate = new Promise<string>((resolve, relect) => { resolve(mm + '/' + dd + '/' + yyyy); });
        //this.updateForm.get('start_date').setValue(this.course.start_date);
        //this.updateForm.get('end_date').setValue(this.course.end_date);
      });
    });
  }

  updateCourse(name, instructor, description, seats, start_date, end_date) {
    this.submitted = true;

    start_date = this.formatDate(start_date);
    console.log("going to submit start_date: " + start_date);

    end_date = this.formatDate(end_date);
    console.log("going to submit end_date: " + end_date);

    console.log(instructor);
    console.log(instructor.id);
    if (!this.updateForm.valid) {
      return;
    }

    this.courseService.updateCourse(this.id, name, description, seats, start_date, end_date).subscribe(res => {
      //remove old instructor
      this.studentCourseService.declineStudentEnrollment(this.oldInstructorId, this.id).subscribe(() => {
        console.log("Removed old instructor from course");
      });
      //add new instructor
      this.studentCourseService.enrollStudentToCourse(instructor.id, this.id, 'enrolled').subscribe(() => {
        console.log("Added new instructor to course");
      });
      this.router.navigate(['/admin/dashboard']);
    });
  }

  hDateFormat(course: Course) {
    let start_date = new Date(course.start_date.toString());
    let end_date = new Date(course.end_date.toString());

    course.start_date = start_date.toLocaleDateString();
    course.end_date = end_date.toLocaleDateString();
  }

  formatDate(date) {
    let newDate = new Date(date);
    let dd = String(newDate.getDate()).padStart(2, '0');
    let mm = String(newDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = newDate.getFullYear();

    let dateRes: String = yyyy + '-' + mm + '-' + dd;
    return dateRes;
  }

  onStartDateSelect(event) {
    this.startDateSelected = true;
    this.startDateEvent = new Promise<String>((resolve, reject) => {
      resolve(String(event.month).padStart(2, '0') + '/' + String(event.day).padStart(2, '0') + '/' + event.year);
    });
  }

  onEndDateSelect(event) {
    this.endDateSelected = true;
    this.endDateEvent = new Promise<String>((resolve, reject) => {
      resolve(String(event.month).padStart(2, '0') + '/' + String(event.day).padStart(2, '0') + '/' + event.year);
    });
  }

}
