import { Component, OnInit } from '@angular/core';
import { StudentCourseService } from 'src/app/core/services/student-course.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  students: any = [];
  courseId;

  constructor(private studentCourseService: StudentCourseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseId = params.id;
      console.log("param id is: " + params.id);
    })
    this.fetchStudents(this.courseId);
  }

  // Gets students from course ID
  fetchStudents(courseId) {
    this.studentCourseService.getStudentsByCourseId(courseId).subscribe((data) => {
      this.students = data;
      console.log(data);
    });
  }

}
