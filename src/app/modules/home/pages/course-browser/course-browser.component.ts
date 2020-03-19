import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

import { Course } from '../../../../core/models/course.model';
import { User } from '@app/core/models/user';
import { CourseService } from '../../../../core/services/course.service';
import { StudentCourseService } from '@app/core/services/student-course.service';
import { AuthenticationService } from '@app/core/services/authentication.service';

import { environment } from 'src/environments/environment';

import io from "socket.io-client";
import decode from 'jwt-decode';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Component({
  selector: 'app-course-browser',
  templateUrl: './course-browser.component.html',
  styleUrls: ['./course-browser.component.scss']
})
export class CourseBrowserComponent implements OnInit {

  //courses: Course[];
  courses: any = {};
  coursesUnavailable: Boolean[] = [];
  pages: any = [];
  searchedCourses: any = [];
  displayedColumns = ['id', 'name', 'description', 'seats', 'start_date', 'end_date', 'Enrollment'];
  page = 0;
  currentPage;
  maxPages;
  maxPagesArray;
  socket;
  searchValue;
  searchedCourse;
  searchedCourseObject;
  searchedCoursesArray;
  foundCourse = false;
  foundCourses = false;
  foundCoursesN: number = 0;
  duplicateCourse = false;
  num = 0;
  numberPerPage = 5;
  currentUser: User;
  tokenUser: User;
  studentId;

  constructor(private courseService: CourseService, private studentCourseService: StudentCourseService, private authService: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let page = this.route.snapshot.paramMap.get('page') || this.page;
    this.fetchCourses(page);
    this.socket = io.connect(environment.apiURL);
    if(this.authService.currentUserValue){
      this.currentUser = this.authService.currentUserValue;
      this.tokenUser = decode(this.currentUser.token);
      if(this.currentUser)
        this.studentId = this.tokenUser.id;
    }
    //console.log("Init page: " + page);
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
        //console.log(this.pages);
        console.log('Data requested...');
        //console.log(this.courses.res);
        this.courses.res.forEach((course: Course, index, arr) => {
          let start_date = new Date(arr[index].start_date.toString());
          let end_date = new Date(arr[index].end_date.toString());

          arr[index].start_date = start_date.toLocaleDateString();
          arr[index].end_date = end_date.toLocaleDateString();
          this.coursesUnavailable[index] = false;
          if(course.seats < 1){
            this.coursesUnavailable[index] = true;
          }
      });
        //console.log('Data requested...');
        //console.log(this.courses);
        this.router.navigate(['/course-library', { page: page}]);
      });
  }

  fetchPageCourses(pageNo) {
    console.log("pageNo: " + pageNo);
    if(pageNo < 0) {
      return;
    }
    this.courseService.getCourses(pageNo, this.numberPerPage)
      .subscribe((data: any = {}) => {
        this.courses = data;
        this.page = pageNo;
        this.currentPage = this.courses.pagination.current;
        this.maxPages = this.courses.pagination.maxPages;
        this.courses.res.forEach((course: Course, index, arr) => {
            let start_date = new Date(arr[index].start_date.toString());
            let end_date = new Date(arr[index].end_date.toString());

            arr[index].start_date = start_date.toLocaleDateString();
            arr[index].end_date = end_date.toLocaleDateString();
            this.coursesUnavailable[index] = false;
            if(course.seats < 1){
              this.coursesUnavailable[index] = true;
            }
        });
        console.log('Data requested...' + pageNo);
        //console.log(this.courses);
        //console.log("Current page: " + this.courses.pagination.current);
        this.router.navigate(['/course-library', { page: this.courses.pagination.current}]);
      });
  }

  studentEnroll(studentId, courseId, course_name, enrollment_status) {
    // Add student to students_courses table with pending enrollment
    this.courseService.getCourseById(courseId).subscribe((course: Course) => {
      if(course.seats > 0){
        this.studentCourseService.enrollStudentToCourse(studentId, courseId, enrollment_status).subscribe(() => {
          alert("Enrolled for course: " + course_name);
        });
        console.log("StudentId: " + studentId);
        console.log(`Enrollment pending for courseId: ${courseId}`);
      }
    })
  } 


  searchCourse(searchTerm) {
    if(searchTerm == ""){
      this.foundCoursesN = 0;
      return;
    }

    //console.log("socketid: " + this.socket.id);
    this.socket.emit('search', searchTerm);

    this.socket.on('search-data', (course) => {
        this.searchedCourses.length = 0;
        this.num++;
        //console.log(course);
        course.forEach((val, i, arr) => {
            this.searchedCourses.push(arr[i]);
        });
        this.searchCourseFnAll(course);
      });
    }

  searchedCourseFn(course) {
    this.foundCoursesN = 1;

    let start_date = new Date(course.start_date.toString());
    let end_date = new Date(course.end_date.toString());

    course.start_date = start_date.toLocaleDateString();
    course.end_date = end_date.toLocaleDateString();

    this.searchedCourseObject = course;
    //console.log("searched course: " + JSON.stringify(this.searchedCourseObject));
  }

  searchCourseFnAll(courses){
    this.foundCoursesN = 2;

    courses.forEach((course) => {
      let start_date = new Date(course.start_date.toString());
      let end_date = new Date(course.end_date.toString());

      course.start_date = start_date.toLocaleDateString();
      course.end_date = end_date.toLocaleDateString();
    })

    this.searchedCoursesArray = courses;
    //console.log("searched courses: " + JSON.stringify(this.searchedCoursesArray));

  }
}
