import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { StudentCourseService } from 'src/app/core/services/student-course.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  courses: any = [];

  constructor(private studentCourseService: StudentCourseService) { }

  ngOnInit() {
    this.fetchStudentCourses();
    
  }

  fetchStudentCourses() {
    this.studentCourseService.getCoursesByStudentId(1).subscribe((data) => {
      this.courses = data;
      console.log(data);
    });
  }
  

  sidebarIsOpen = false;
  openNav(){
    console.log("hello");
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    this.sidebarIsOpen = true;
  }

  closeNav(){
    console.log("goodbye");
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    this.sidebarIsOpen = false;
  }
  
}
