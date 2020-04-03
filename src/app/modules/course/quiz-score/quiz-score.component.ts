import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { StudentCourseService } from '@app/core/services/student-course.service';

import { User } from '@app/core/models/user';

@Component({
  selector: 'app-quiz-score',
  templateUrl: './quiz-score.component.html',
  styleUrls: ['./quiz-score.component.scss']
})
export class QuizScoreComponent implements OnInit {

  score: Promise<string>;
  courseId: Promise<string>;
  currentUser: Promise<User>;

  constructor(private route: ActivatedRoute, private authenticationService: AuthenticationService, private studentCourseService: StudentCourseService) { 
    this.authenticationService.currentUser.subscribe(user => this.currentUser = Promise.resolve(user));
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.createPromises(params);
      this.updateStudentPoints();
    });
  }

  createPromises(params){

    this.score = new Promise((resolve, reject) => {
      if(params.get('score') == null){
        reject("unable to find score");
      } else {
        resolve(params.get('score'));
      }
    });

    this.courseId = new Promise((resolve, reject) => {
      if(params.get('course') == null){
        reject("unable to find courseId");
      } else {
        resolve(params.get('course'));
      }
    });

  }
    
  updateStudentPoints(){

    this.courseId.then((id) => {
      let courseId = parseInt(id, 10);
      console.log("found courseId: " + courseId);

      this.score.then((score: string) => {
        this.currentUser.then((user) => {
          console.log("found score for: " + user.email + "\nid: " + user.id);
          console.log(score);
          this.studentCourseService.updatePoints(user.id, courseId, score).subscribe((data) => {
            console.log("Updated points for " + user.email);
            console.log(data);
          });
        });
      }).catch((reason) => {
        console.error(reason);
      });

    }).catch((reason) => {
      console.error(reason);
    });

  }

}
