import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class CourseBrowserComponent implements OnInit, OnDestroy {

  //courses: Course[];
  courses: any = {};
  coursesUnavailable: Boolean[] = [];
  coursesUnavailableSearched: Boolean;
  pages: any[] = [];
  searchedCourses: any[] = [];
  displayedColumns = ['id', 'name', 'description', 'seats', 'start_date', 'end_date', 'Enrollment'];
  page: number = 0;
  currentPage;
  currQueryPage: number;
  maxPages;
  maxPagesArray;
  socket;
  searchValue;
  searchedCourse;
  searchedCourseObject;
  searchedCoursesArray: any[] = [];
  foundCourse = false;
  foundCourses = false;
  foundCoursesN: number = 0;
  duplicateCourse = false;
  num = 0;
  numberPerPage = 5;
  currentUser: User;
  tokenUser: User;
  studentId;
  studentEmail;
  enrollment_status: any[] = [];
  enrollment_status_searched_course: any;
  searchInputVal: any;
  gotData: Boolean = false;
  disablePaginationBool: Boolean = false;

  constructor(private courseService: CourseService, private studentCourseService: StudentCourseService, private authService: AuthenticationService, private router: Router, private route: ActivatedRoute) { 
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.searchInputVal = "";
    
    this.route.queryParamMap.subscribe((params) => {
      this.page = parseInt(params.get('page'), 10) || 0;
      console.log("page: " + this.page);
      this.fetchCourses(this.page);
    });

    this.socket = io.connect(environment.apiURL);
    this.studentEmail = JSON.parse(localStorage.getItem("FB_user")).email;

    console.log("course-browser:");
    console.log(this.currentUser);
    this.studentId = this.currentUser.id;
    if(this.authService.currentUserValue){
      this.currentUser = this.authService.currentUserValue;
      //this.tokenUser = decode(this.currentUser.token);
      if(this.currentUser)
        this.studentId = this.currentUser.id;
    }
    //console.log("Init page: " + page);
  }

  ngOnDestroy(){
    this.socket.close();
  }

  showAll(){
    this.fetchPageCourses(this.currQueryPage);
    this.searchInputVal = "";
    this.foundCoursesN = 0;
    this.gotData = false;
  }

  fetchStudentCourse(studentId, courseId, i){ // make i >= 0 if array
    this.studentCourseService.getByStudentCourseId(studentId, courseId).subscribe((student_course: any) => {
      //console.log("fetched student_course");
      //console.log(student_course);
      //console.log(this.enrollment_status);

      if(student_course && i >= 0) {
        this.enrollment_status[i] = student_course.enrollment_status;
      } else if(student_course && i < 0) {
        this.enrollment_status_searched_course = student_course.enrollment_status;
      }
    })
  }

  fetchCourses(page: number) {
    this.disablePaginationBool = false;
    this.courseService.getCourses(page, this.numberPerPage)
      .subscribe((data: {}) => {
        this.courses = data;

        console.log("zero out enrollment_status array");
        this.enrollment_status.splice(0, this.enrollment_status.length);

        this.courses.res.forEach((course: Course, i, arr) => {
          console.log(course);
          this.fetchStudentCourse(this.studentId, course.id, i);
        })

        this.page = page;
        this.currentPage = this.courses.pagination.current;
        this.maxPages = this.courses.pagination.maxPages;
        this.maxPagesArray = new Array(this.maxPages);
        this.pages = Object.values(this.courses.pagination);
        //console.log(this.pages);
        console.log('Data requested...');
        //console.log(this.courses.res);

        console.log("zero out coursesUnavailable array");
        this.coursesUnavailable.splice(0, this.coursesUnavailable.length);

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
        this.router.navigate([], { queryParams: { page: page }, relativeTo: this.route });
      });
  }

  fetchPageCourses(pageNo: number) {
    console.log("pageNo: " + pageNo);
    if(pageNo < 0) {
      return;
    }
    this.disablePaginationBool = false;

    this.courseService.getCourses(pageNo, this.numberPerPage)
      .subscribe((data: any = {}) => {
        this.courses = data;

        console.log("zero out enrollment_status array");
        this.enrollment_status.splice(0, this.enrollment_status.length);

        this.courses.res.forEach((course: Course, i, arr) => {
          //console.log(course);
          this.fetchStudentCourse(this.studentId, course.id, i);
        })

        this.page = pageNo;
        this.currentPage = this.courses.pagination.current;
        this.maxPages = this.courses.pagination.maxPages;

        console.log("zero out coursesUnavailable array");
        this.coursesUnavailable.splice(0, this.coursesUnavailable.length);

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
        this.router.navigate([], { queryParams: { page: this.courses.pagination.current }, relativeTo: this.route });
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
      this.showAll();
      return;
    }

    //console.log("socketid: " + this.socket.id);
    this.gotData = false;
    this.socket.emit('search', searchTerm);

    this.socket.on('search-data', (course) => {
        if(this.gotData){
          return;
        }
        this.searchedCourses.splice(0, this.searchedCourses.length);
        this.num++;
        this.gotData = true;

        course.forEach((val, i, arr) => {
            this.searchedCourses.push(arr[i]);
        });
        this.searchCourseFnAll(course);
      });
    }

  searchedCourseFn(course: Course) {
    this.foundCoursesN = 1;
    this.disablePaginationBool = true;

    let start_date = new Date(course.start_date.toString());
    let end_date = new Date(course.end_date.toString());

    course.start_date = start_date.toLocaleDateString();
    course.end_date = end_date.toLocaleDateString();

    this.searchedCourseObject = course;

    this.fetchStudentCourse(this.studentId, course.id, -1);
    this.coursesUnavailableSearched = course.seats < 1 ? true : false;
    //console.log("searched course: " + JSON.stringify(this.searchedCourseObject));
  }

  searchCourseFnAll(courses){
    this.foundCoursesN = 2;
    this.disablePaginationBool = true;

    console.log("zero out coursesUnavailable array");
    this.coursesUnavailable.splice(0, this.coursesUnavailable.length);

    courses.forEach((course: Course, index) => {
      let start_date = new Date(course.start_date.toString());
      let end_date = new Date(course.end_date.toString());

      course.start_date = start_date.toLocaleDateString();
      course.end_date = end_date.toLocaleDateString();

      this.coursesUnavailable[index] = false;
      if(course.seats < 1){
        this.coursesUnavailable[index] = true;
      }
    })

    this.searchedCoursesArray = courses;

    console.log("zero out enrollment_status array");
    this.enrollment_status.splice(0, this.enrollment_status.length);

    this.searchedCoursesArray.forEach((course: Course, i, arr) => {
      console.log(course);
      this.fetchStudentCourse(this.studentId, course.id, i);
    })
    //console.log("searched courses: " + JSON.stringify(this.searchedCoursesArray));

  }
}
