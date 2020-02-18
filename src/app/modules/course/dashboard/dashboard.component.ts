import { Component, OnInit } from '@angular/core';

import { User } from '@app/core/models/user';
import { StudentCourseService } from 'src/app/core/services/student-course.service';
import { AuthenticationService } from '@app/core/services/authentication.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  courses: any = [];
  currentStudent: User;
  studentId;

  constructor(private studentCourseService: StudentCourseService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.currentStudent = this.authService.currentUserValue;
    if(this.currentStudent){
      this.studentId = this.currentStudent.id;
      this.fetchStudentCourses(this.studentId);
      console.log(this.studentId);
    }
  }

  fetchStudentCourses(studentId) {
    //this.studentId
    this.studentCourseService.getCoursesByStudentId(studentId).subscribe((data) => {
      this.courses = data;
      console.log(data);
    });
  }

}
