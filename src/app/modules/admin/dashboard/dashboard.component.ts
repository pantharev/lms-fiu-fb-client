import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Course } from '../../../core/models/course.model';
import { CourseService } from '../../../core/services/course.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  courses: any = {};
  displayedColumns = ['id', 'name', 'description', 'seats', 'start_date', 'end_date', 'Actions'];
  page = 0;
  pages = [];
  currentPage;
  maxPages;
  maxPagesArray;
  numberPerPage = 2;

  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let page = this.route.snapshot.paramMap.get('page') || this.page;
    this.fetchCourses(page);
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
        this.courses.res.forEach((item, index, arr) => {
          let start_date = new Date(arr[index].start_date.toString());
          let end_date = new Date(arr[index].end_date.toString());

          arr[index].start_date = start_date.toLocaleDateString();
          arr[index].end_date = end_date.toLocaleDateString();

      });
        //console.log('Data requested...');
        //console.log(this.courses);
        this.router.navigate(['/admin', { page: page}]);
      });
  }

  fetchPageCourses(pageNo) {
    //console.log("pageNo: " + pageNo);
    if(pageNo < 0) {
      return;
    }
    this.courseService.getCourses(pageNo, 2)
      .subscribe((data: any = {}) => {
        this.courses = data;
        this.page = pageNo;
        this.currentPage = this.courses.pagination.current;
        this.maxPages = this.courses.pagination.maxPages;
        this.courses.res.forEach((item, index, arr) => {
            let start_date = new Date(arr[index].start_date.toString());
            let end_date = new Date(arr[index].end_date.toString());

            arr[index].start_date = start_date.toLocaleDateString();
            arr[index].end_date = end_date.toLocaleDateString();

        });
        console.log('Data requested...' + pageNo);
        //console.log(this.courses);
        //console.log("Current page: " + this.courses.pagination.current);
        this.router.navigate(['/admin', { page: this.courses.pagination.current}]);
      });
  }

  editCourse(id) {
    this.router.navigate([`admin/edit-course/${id}`]);
  }

  deleteCourse(id) {
    let r = confirm(`Delete Course ${id}: Are you sure?`);
    if(r == true){
      this.courseService.deleteCourse(id).subscribe(() => {
        //this.fetchCourses();
      });
    }
  }

  pendingEnrollment(id) {
    this.router.navigate([`admin/pending-enrollment/${id}`]);
  }

}
