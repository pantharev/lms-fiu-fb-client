import { Component, OnInit, ɵINJECTOR_IMPL__POST_R3__ } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { StudentCourseService } from 'src/app/core/services/student-course.service';
import { CourseService } from 'src/app/core/services/course.service';
import { StudentService } from 'src/app/core/services/student.service';
import { EmailNotificationService } from 'src/app/core/services/email-notification.service';

import { Course } from '@app/core/models/course.model';

@Component({
  selector: 'app-pending-enrollment',
  templateUrl: './pending-enrollment.component.html',
  styleUrls: ['./pending-enrollment.component.scss']
})
export class PendingEnrollmentComponent implements OnInit {

  id: number;
  course: Course;
  students: any = [];
  noSeats: Boolean = false;

  constructor(private studentCourseService: StudentCourseService, private courseService: CourseService, private studentService: StudentService, private emailer: EmailNotificationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;

      this.courseService.getCourseById(this.id).subscribe((res: Course) => {
        this.course = res;
        if(this.course.seats < 1) {
          this.noSeats = true;
          console.log("no seats: " + this.noSeats);
        }
        console.log(this.course);
        if(!this.noSeats){
          this.studentCourseService.getStudentsByCourseId(this.id).subscribe(res => {
            this.students = res;
            console.log(this.students);
          });
        }
      })
      /*this.studentCourseService.getStudentsByCourseId(this.id).subscribe(res => {
        this.students = res;
        //console.log(this.students);
      });*/
      
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

        this.courseService.updateCourseSeats(courseId, this.course.seats - 1).subscribe(() => {
          console.log("seats decremented by 1");
          this.course.seats = this.course.seats - 1;
        })

        // Send e-mail notification to student
        this.studentService.getStudentById(studentId).subscribe((student) => {
          console.log("About to send email to following student:");
          console.log(student);
          this.emailer.sendMessage(student);
        });
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
