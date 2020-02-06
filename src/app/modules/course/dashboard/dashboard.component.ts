import { Component, OnInit } from '@angular/core';

import { StudentCourseService } from 'src/app/core/services/student-course.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  courses: any = [];

  constructor(private studentCourseService: StudentCourseService) { }

  ngOnInit() {
    this.fetchStudentCourses();
  }

  fetchStudentCourses() {
    this.studentCourseService.getCoursesByStudentId(1).subscribe((data) => {
      this.courses = data;
      console.log(data);
    });
  }

}
