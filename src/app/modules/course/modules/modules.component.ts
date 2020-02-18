import { Component, OnInit, Sanitizer } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { VideoService } from '@app/core/services/video.service';
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
  linksFromDB: string[] = new Array();
  links: string[] = new Array();
  safeLinks = new Map<number, SafeResourceUrl>();
  resources = ['pdf1', 'pdf2', 'worddoc1'];
  quizzes = ['quiz1', 'quiz2', 'quiz3'];
  urlPath;
  courseId;
  toggleContent = [];
  moduleVideosFetched = [];
  videoForm: FormGroup;
  contentObject = {
    course_id: 0,
    course_name: "",
    module_id: 0,
    module_number: 0,
    module_title: "",
    lockedUntil: "",
    link: ""
  }

  constructor(private moduleService: ModuleService, private videoService: VideoService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService, private sanitizer: DomSanitizer, private modalService: NgbModal) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.makeVideoForm();
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseId = params.id;
      console.log("param id is: " + params.id);
    })
    this.fetchModules(this.courseId);
  }

  makeVideoForm() {
    this.videoForm = this.fb.group({
      link: ['', Validators.required]
    });
  }

  pushLinksToArray(linksFromDB, links) {
    linksFromDB.forEach((val, i, arr) => {
      links.push({link: arr[i].link, module_id: arr[i].module_id});
      console.log("Links array: " + JSON.stringify(links));
    })
  }

  updateVideoUrl(linksArr, moduleId) {
    console.log("updateVideoUrl");
      linksArr.forEach((val, i: number, arr: []) => {
          if(val.module_id == moduleId){
            console.log("linksArr: " + JSON.stringify(val));
            let id = val.link.substring(32, 43);
            let videoUrl: SafeResourceUrl;
            let url: string;
            url = 'https://www.youtube.com/embed/' + id;
            videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
            this.safeLinks.set(moduleId, videoUrl);
            console.log(this.safeLinks.get(moduleId));
          }
        })
      }

  open(content) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  createModule(courseId) {
    this.router.navigate([`courses/${courseId}/create-module`]);
  }

  fetchModules(courseId) {
    this.moduleService.getModulesByCourseId(courseId).subscribe((data: []) => {
      this.modules = data;
      console.log(this.modules);
      this.fetchContent(courseId, data);
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
  }

  addVideo(link, moduleId) {
    this.videoService.addVideo(link, moduleId).subscribe(() => {
      alert("Added video");
    })
  }

  fetchContent(courseId, modules) {
    console.log("Fetching content: " + courseId);
    this.videoService.fetchVideos(courseId).subscribe((data: []) => {
      this.linksFromDB = data;
      console.log(this.linksFromDB);
      this.pushLinksToArray(data, this.links);
      modules.forEach((val, i, arr) => {
        let moduleval = val;
        data.forEach((val: any, i, arr) => {
          if(val.module_id == moduleval.module_id){
            console.log(val.module_id);
            this.updateVideoUrl(this.links, val.module_id);
          }
        })
      })
    })
  }
}
