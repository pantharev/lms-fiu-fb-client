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

  constructor(private moduleService: ModuleService, private route: ActivatedRoute, private authenticationService: AuthenticationService) {
    const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
    this.urlPath = url;
    this.courseId = this.urlPath.source._value[0].path;

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit() {
    console.log(this.urlPath.source._value[0].path);
    console.log(this.courseId);
    this.fetchModules(this.courseId);
  }

  fetchModules(courseId) {
    this.moduleService.getModulesByCourseId(courseId).subscribe((data: []) => {
      this.modules = data;
      console.log(this.modules);
    })
  }

}
