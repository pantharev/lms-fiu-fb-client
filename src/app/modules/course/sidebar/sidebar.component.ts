import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  courseId: number;

  constructor(private route: ActivatedRoute) { }
  sidebarIsOpen = true;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseId = params.id;
    })
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("mySidenav").style.display = "block";
  }

}
