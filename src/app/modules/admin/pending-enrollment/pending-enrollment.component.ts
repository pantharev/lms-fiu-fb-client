import { Component, OnInit, ɵINJECTOR_IMPL__POST_R3__ } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { StudentCourseService } from 'src/app/core/services/student-course.service';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-pending-enrollment',
  templateUrl: './pending-enrollment.component.html',
  styleUrls: ['./pending-enrollment.component.scss']
})
export class PendingEnrollmentComponent implements OnInit {

  id: number;
  course: any = {};
  students: any = [];

  constructor(private studentCourseService: StudentCourseService, private courseService: CourseService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;

      this.courseService.getCourseById(this.id).subscribe(res => {
        this.course = res;
        console.log(this.course);
      })
      this.studentCourseService.getStudentsByCourseId(this.id).subscribe(res => {
        this.students = res;
        console.log(this.students);
      });
    });
  }

  acceptEnrollment(studentId, courseId, enrollment_status) {
    // Update student enrollment_status = 'enrolled'
    let ret = confirm(`Accept student ${studentId} enrollment?`);
    if(ret == true){
      this.studentCourseService.acceptStudentEnrollment(studentId, courseId, enrollment_status).subscribe(res => {
        //alert(`Accepted student ${studentId} enrollment`);

        // remove student from view
        for (var i = 0; i < this.students.length; i++){
          if(this.students[i].student_id === studentId) {
            this.students.splice(i, 1);
          }
        }

      });
    }
  }

  declineEnrollment(studentId, courseId) {

    let ret = confirm(`Decline student ${studentId} enrollment?`);
    if(ret == true){
      this.studentCourseService.declineStudentEnrollment(studentId, courseId).subscribe(res => {
        //alert(`Declined student ${studentId} enrollment`);

        // remove student from view
        for (var i = 0; i < this.students.length; i++){
          if(this.students[i].student_id === studentId) {
            this.students.splice(i, 1);
          }
        }

      });
    }
  }

}
