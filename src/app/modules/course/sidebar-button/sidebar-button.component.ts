import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-button',
  templateUrl: './sidebar-button.component.html',
  styleUrls: ['./sidebar-button.component.scss']
})
export class SidebarButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sidebarIsOpen = false;
  openNav(){
    console.log("hello");
    
    document.getElementById("mySidenav").style.width = "250px";
    
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("mySidenav").style.display = "block";
    this.sidebarIsOpen = true;
  }

  closeNav(){
    console.log("goodbye");
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("mySidenav").style.width = "0";

    document.getElementById("main").style.marginLeft = "0";
    this.sidebarIsOpen = false;
  }
}
