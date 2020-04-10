import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Course } from '../../../core/models/course.model';
import { CourseService } from '../../../core/services/course.service';
import { HttpParams } from '@angular/common/http';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { StudentCourseService } from 'src/app/core/services/student-course.service';

import { User } from '@app/core/models/user';
import decode from 'jwt-decode';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUser: User;
  isAdmin: Boolean;
  tokenPayload;
  courses: any = {};
  displayedColumns = ['id', 'name', 'description', 'seats', 'start_date', 'end_date', 'Actions'];
  page = 0;
  pages = [];
  students: number[] = [];
  currentPage;
  maxPages;
  maxPagesArray;
  numberPerPage = 5;

  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService, private studentCourseService: StudentCourseService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.page = parseInt(params.get('page'), 10) || 0;
      console.log("page: " + this.page);
      this.fetchCourses(this.page);
    });

    console.log(this.currentUser);
    this.isAdmin = (JSON.parse(localStorage.getItem("FB_user")).role == 'admin');

    /*
    this.currentUser = this.authenticationService.currentUserValue;
    if(this.currentUser){
      this.tokenPayload = decode(this.currentUser.token);
      this.isAdmin = (this.tokenPayload.role === "admin");
      console.log("Current user in Admin: " + JSON.stringify(this.currentUser));
      console.log("tokenPayload: " + JSON.stringify(this.tokenPayload));
    }
    */
  }

  pendingEnrollmentsNotification(courses: []) {
    courses.forEach((course: Course, index, arr) => {
      let start_date = new Date(course.start_date.toString());
      let end_date = new Date(course.end_date.toString());

      course.start_date = start_date.toLocaleDateString();
      course.end_date = end_date.toLocaleDateString();
      if (course.seats < 1) {
        return;
      }
      this.students[index] = 0;
      this.studentCourseService.getStudentsByCourseId(course.id).subscribe((res: []) => {
        res.forEach((val: any) => {
          if (val.enrollment_status == "pending") {
            this.students[index]++;
          }
        })
        console.log(course.name + " pending students: " + this.students[index]);
        //this.students = res;
        //console.log("i: " + index + " course: " + JSON.stringify(course));
        //console.log(this.students);
      });
    });
  }

  fetchCourses(page) {
    this.courseService.getCourses(page, this.numberPerPage)
      .subscribe((data: {}) => {
        this.courses = data;
        this.page = page;
        this.currentPage = this.courses.pagination.current;
        this.maxPages = this.courses.pagination.maxPages;
        this.maxPagesArray = new Array(this.maxPages);
        this.pages = Object.values(this.courses.pagination);

        console.log('Data requested...');

        this.pendingEnrollmentsNotification(this.courses.res);
        this.router.navigate([], { queryParams: { page: page }, relativeTo: this.route });
      });
  }

  fetchPageCourses(pageNo) {
    //console.log("pageNo: " + pageNo);
    if (pageNo < 0) {
      return;
    }
    this.courseService.getCourses(pageNo, this.numberPerPage)
      .subscribe((data: any = {}) => {
        this.courses = data;
        this.page = pageNo;
        this.currentPage = this.courses.pagination.current;
        this.maxPages = this.courses.pagination.maxPages;

        this.pendingEnrollmentsNotification(this.courses.res);

        console.log('Data requested...' + pageNo);

        this.router.navigate([], { queryParams: { page: this.courses.pagination.current }, relativeTo: this.route });
      });
  }

  editCourse(id) {
    this.router.navigate([`admin/edit-course/${id}`]);
  }

  deleteCourse(id) {
    let r = confirm(`Delete Course ${id}: Are you sure?`);
    if (r == true) {
      this.courseService.deleteCourse(id).subscribe(() => {
        //this.fetchCourses();
      });
      const item = this.courses.res.find(item => item.id === id);
      this.courses.res.splice(this.courses.res.indexOf(item));
    }
  }

  pendingEnrollment(id) {
    this.router.navigate([`admin/pending-enrollment/${id}`]);
  }

}
