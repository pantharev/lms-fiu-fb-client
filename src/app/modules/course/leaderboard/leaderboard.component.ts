import { Component, OnInit } from '@angular/core';
import { StudentCourseService } from 'src/app/core/services/student-course.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {


  courseId;
  constructor(private studentCourseService: StudentCourseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseId = params.id;
      console.log("param id is: " + params.id);
    })
  }

}
