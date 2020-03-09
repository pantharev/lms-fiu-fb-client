import { Component, OnInit } from '@angular/core';
import { User } from '@app/core/models/user';
import { Course } from '@app/core/models/course.model';

import { CourseService } from '@app/core/services/course.service';
import { StudentCourseService } from 'src/app/core/services/student-course.service';
import { AuthenticationService } from '@app/core/services/authentication.service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  courses: Course[] = [];
  course: Course;
  currentStudent: User;
  tokenPayload: User;
  hasCourses;
  listCourses;
  studentId;
  courseDrop: Boolean = false;

  constructor(private studentCourseService: StudentCourseService, private courseService: CourseService, private authService: AuthenticationService) { }

  ngOnInit() {  
    this.currentStudent = this.authService.currentUserValue;
    if(this.currentStudent){
      this.tokenPayload = decode(this.currentStudent.token);
      this.studentId = this.tokenPayload.id;
      //this.hasCourses = this.asyncFetchStudentCourses(this.studentId);
      this.listCourses = this.studentCourseService.getCoursesByStudentId(this.studentId);
      console.log(this.studentId);
    }
  }

  fetchStudentCourses(studentId) {
    //let returnValue: Boolean;
    return new Promise((resolve, reject) => {

      this.studentCourseService.getCoursesByStudentId(studentId).subscribe((data: any[]) => {
        for(let i = 0; i < data.length; i++){
          if(data[i]){
            if(data[i].enrollment_status == "enrolled"){
              this.courses.push(data[i]);
              console.log("Enrolled");
              console.log(data[i]);
            } else {
              console.log("Not enrolled");
              console.log(data[i]);
            }
            if(i == data.length){
              console.log("got data");
              resolve(true);
            }
              //returnValue = true;
          } else{
            console.log("got no data");
            //returnValue = false;
            reject(false);
          }
        }
        //this.hasCourses = resolve('resolved');
      }, (error) => {
        reject(error);
        console.log("error: " + error);
      });
    }).then(res => {
      console.log("resthen: " + res);
      return true;
    }).catch(error => {
      console.log('ERROR: ' + error);
      return false;
    })
    //return returnValue;
  }

  async asyncFetchStudentCourses(studentId) {
    console.log("calling");
    this.hasCourses = await this.fetchStudentCourses(studentId);
    console.log("resasync: " + this.hasCourses);
  }
  
  dropCourse(courseId) {
    this.courseService.getCourseById(courseId).subscribe((course: Course) => {
      this.course = course;
    })
    let r = confirm("Drop the course? Are you sure?");
    if(r){
      this.studentCourseService.declineStudentEnrollment(this.studentId, courseId).subscribe(() => {
        alert("Dropped the course");
        this.courseService.updateCourseSeats(courseId, this.course.seats + 1).subscribe(() => {
          console.log("incremented seats by 1: " + (this.course.seats + 1));
        })
      })
    }
  }

  toggleDropCourse(){
    if(this.courseDrop == false){
      this.courseDrop = true;
    }
    else {
      this.courseDrop = false;
    }
  }
}
