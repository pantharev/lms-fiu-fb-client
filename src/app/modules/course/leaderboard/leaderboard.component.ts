import { Component, OnInit } from '@angular/core';
import { StudentCourseService } from 'src/app/core/services/student-course.service';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '@app/core/services/authentication.service';
import decode from 'jwt-decode';

import { User } from '@app/core/models/user';
@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  students: any = [];
  average;
  courseId;
  currentUser: User;
  userPayload: User;

  constructor(private studentCourseService: StudentCourseService, private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseId = params.id;
      console.log("param id is: " + params.id);
    })
    //this.userPayload = decode(this.currentUser.token);

    this.fetchStudents(this.courseId);
    this.getAvgStudentPoints(this.courseId, this.currentUser.id);
  }

  // Gets students from course ID
  fetchStudents(courseId) {
    console.log("fetching students");
    this.studentCourseService.getStudentsByCourseId(courseId).subscribe((data) => {
      this.students = data;
      console.log(data);
    });
  }

  getAvgStudentPoints(courseId, studentId){
    console.log("Called avgstudentpoints on student_id: " + studentId);
    this.studentCourseService.getAvgStudentPoints(courseId, studentId).subscribe((data) => {
      this.average = data;
      console.log("avg: " + JSON.stringify(data));
      this.average.average = this.toFixed(this.average.average, 2);
    })
  }

  toFixed(value, precision) {
    var power = Math.pow(10, precision || 0);
    return String(Math.round(value * power) / power);
  }

}
