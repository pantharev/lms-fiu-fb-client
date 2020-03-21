import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ModuleService } from '@app/core/services/module.service';
import { DiscussionService } from '@app/core/services/discussion.service';
import { AuthenticationService } from '@app/core/services/authentication.service';

import { User } from '@app/core/models/user';

import decode from 'jwt-decode';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  postForm: FormGroup;
  module: Promise<object>|null = null;
  currentUser;
  userPayload: User;
  submitted = false;

  constructor(private fb: FormBuilder, private discussionService: DiscussionService, private moduleService: ModuleService, private authenticationService: AuthenticationService, private route: ActivatedRoute) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  get p() { return this.postForm.controls; };

  ngOnInit(): void {
    this.userPayload = decode(this.currentUser.token);

    this.route.params.subscribe((params) => {
      this.moduleService.getModuleById(params.moduleId).subscribe((moduleData) => {
        this.module = new Promise((resolve, reject) => {
          resolve(moduleData[0]);
        });
      });
    });
    this.createForm();
  }

  createForm(){
    this.postForm = this.fb.group({
      post: ['', Validators.required]
    })
  }

  createPost(post){
    this.submitted = true;

    if(!this.postForm.valid){
      return;
    }

    this.module.then((moduleVal: any) => {
      let userName = this.userPayload.f_name + " " + this.userPayload.l_name;
      let today = new Date();
      this.discussionService.createDiscussion(userName, post, today, today, moduleVal.id, this.userPayload.id).subscribe(() => {
        alert("Created post");
      })
    })
  }

}
