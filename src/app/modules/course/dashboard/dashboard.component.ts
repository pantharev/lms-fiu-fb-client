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
  courseDrop: Boolean = false;

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
    this.studentCourseService.getCoursesByStudentId(studentId).subscribe((data: any[]) => {
      for(let i = 0; i < data.length; i++){
        if(data[i].enrollment_status == "enrolled"){
          this.courses.push(data[i]);
          console.log("Enrolled");
          console.log(data[i]);
        } else {
          console.log("Not enrolled");
          console.log(data[i]);
        }
      }
    });
  }
  
  dropCourse(courseId) {
    let r = confirm("Drop the course? Are you sure?");
    if(r){
      this.studentCourseService.declineStudentEnrollment(this.studentId, courseId).subscribe(() => {
        alert("Dropped the course");
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
