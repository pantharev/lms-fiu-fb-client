import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})
export class SidebarAdminComponent implements OnInit {

  courseId: number;
  routeName: string;
  constructor(private route: ActivatedRoute) { };


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseId = params.id;
    });

    this.route.url.subscribe(url => {
      console.log(url);
      if (url[0]) {
        this.routeName = url[0].path;
      }
      else {
        this.routeName = 'home';
      }
      console.log("ROUTE: " + this.routeName);
    });
  }

  ngAfterViewChecked() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById(this.routeName).style.color = "#ffffff";
    document.getElementById(this.routeName).style.backgroundColor = "#2d3d97";
  }

  ngOnDestroy() {
    //console.log("sidebar destroy");
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
}
