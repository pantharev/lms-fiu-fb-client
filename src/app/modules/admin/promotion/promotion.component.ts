import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { StudentService } from '@app/core/services/student.service';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { StudentCourseService } from 'src/app/core/services/student-course.service';

import { User } from '@app/core/models/user';



@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {
  currentUser: User;
  isAdmin: Boolean;
  tokenPayload;
  students: any = {};
  displayedColumns = ['id', 'Email', 'Name', 'Role', 'Actions'];
  page = 0;
  pages = [];
  currentPage;
  maxPages;
  maxPagesArray;
  numberPerPage = 5;

  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService, private studentCourseService: StudentCourseService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    let page = this.route.snapshot.paramMap.get('page') || this.page;
    this.fetchStudents(page);
    console.log(this.currentUser);
    this.isAdmin = (JSON.parse(localStorage.getItem("FB_user")).role == 'admin');
  }

  fetchStudents(page) {
    this.studentService.getStudents(page, this.numberPerPage)
      .subscribe((data: {}) => {
        this.students = data;
        this.page = page;
        this.currentPage = this.students.pagination.current;
        this.maxPages = this.students.pagination.maxPages;
        this.maxPagesArray = new Array(this.maxPages);
        this.pages = Object.values(this.students.pagination);

        console.log('Data requested...');

        //this.pendingEnrollmentsNotification(this.courses.res);
        this.router.navigate(['/admin/promotion'], { queryParams: {page: page} });
      });
  }

  fetchPageStudents(pageNo) {
    //console.log("pageNo: " + pageNo);
    if (pageNo < 0) {
      return;
    }
    this.studentService.getStudents(pageNo, this.numberPerPage)
      .subscribe((data: any = {}) => {
        this.students = data;
        this.page = pageNo;
        this.currentPage = this.students.pagination.current;
        this.maxPages = this.students.pagination.maxPages;

        console.log('Data requested...' + pageNo);

        this.router.navigate(['/admin/promotion'], { queryParams: {page: this.students.pagination.current} });
      });
  }

  updateRole(student, newRole) {
    console.log(student);
    const updatedStudent = {
      id: student.id,
      email: student.email,
      f_name: student.f_name,
      l_name: student.l_name,
      active: null,
      role: newRole
    }
    console.log(updatedStudent);
    this.studentService.updateStudent(updatedStudent).subscribe(() => {
      console.log("changed student " + student.id + " from " + student.role + " to " + newRole);
      alert("changed student " + student.id + " from role " + student.role + " to role " + newRole);
    });
  }

  delete(id) {
    this.studentService.deleteStudent(id).subscribe(() => {
      console.log("deleted student with id " + id);
      alert("deleted student with id " + id);
    });
  }
}

