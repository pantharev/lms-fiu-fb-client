import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { AuthenticationService } from '@app/core/services/authentication.service';
import { User } from '@app/core/models/user';

import { ModuleService } from 'src/app/core/services/module.service';
import { throwToolbarMixedModesError } from '@angular/material';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {
  currentUser: User;
  modules = [];
  urlPath;
  courseId;

  constructor(private moduleService: ModuleService, private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseId = params.id;
      console.log("param id is: " + params.id);
    })
    this.fetchModules(this.courseId);
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
}
