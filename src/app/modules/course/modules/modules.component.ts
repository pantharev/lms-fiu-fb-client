import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { AuthenticationService } from '@app/core/services/authentication.service';
import { User } from '@app/core/models/user';

import { ModuleService } from 'src/app/core/services/module.service';
import { throwToolbarMixedModesError } from '@angular/material';

//import videojs from 'videojs-youtube';
import videojs from 'video.js';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {
  currentUser: User;
  modules = [];
  links = ['https://www.youtube.com/watch?v=TzDhdvVg9_c', 'link2', 'link3'];
  resources = ['pdf1', 'pdf2', 'worddoc1'];
  quizzes = ['quiz1', 'quiz2', 'quiz3'];
  urlPath;
  courseId;
  toggleContent = [];

  constructor(private moduleService: ModuleService, private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseId = params.id;
      console.log("param id is: " + params.id);
    })
    this.fetchModules(this.courseId);
    //document.querySelector('#vid1').setAttribute('data-setup', '{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://youtu.be/zpOULjyy-n8"}], "playbackRates": [0.5, 1, 1.5, 2], "autoplay": false }');
  }

  ngAfterViewInit() {
    //let videojs_options = document.querySelector('#vid1').getAttribute('data-setup');
    //console.log(videojs_options);
  }

  createModule(courseId) {
    this.router.navigate([`courses/${courseId}/create-module`]);
  }

  fetchModules(courseId) {
    this.moduleService.getModulesByCourseId(courseId).subscribe((data: []) => {
      this.modules = data;
      console.log(this.modules);
    })
  }

  editModule(courseId, moduleId) {
    this.router.navigate([`courses/${courseId}/edit-module/${moduleId}`]);
  }

  deleteModule(moduleId, moduleNumber) {
    let response = confirm(`Delete Module ${moduleNumber}: Are you sure?`);
    if(response == true){
      this.moduleService.deleteModule(moduleId).subscribe(() => {
        console.log("Deleted module " + moduleId);
        //this.modules.pop();
      });
      const item = this.modules.find(item => item.id === moduleId);
      this.modules.splice(this.modules.indexOf(item));
      }
  }

  openModule(index) {
    console.log("Opening module content");
    if(this.toggleContent[index]){
      this.toggleContent[index] = false;
    }
    else {
      this.toggleContent[index] = true;
    }
      /*let listItems = document.querySelector('.toggleContent')
      listItems.setAttribute('style', 'display: none');*/
  }
}
