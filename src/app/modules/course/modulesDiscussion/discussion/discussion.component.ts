import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DiscussionService } from '@app/core/services/discussion.service';
import { ModuleService } from '@app/core/services/module.service';
import { AuthenticationService } from '@app/core/services/authentication.service';

import { User } from '@app/core/models/user';

import decode from 'jwt-decode';
@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {

  discussions = [];
  moduleDetails = {};
  currentUser: User;
  userPayload: User;

  constructor(private discussionService: DiscussionService, private moduleService: ModuleService, private authenticationService: AuthenticationService, private route: ActivatedRoute) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit(): void {
    //this.userPayload = decode(this.currentUser.token);

    this.route.params.subscribe((params) => {
      this.discussionService.getDiscussionsInModule(params.moduleId).subscribe((discussionsData: any[]) => {
        console.log(discussionsData);
        this.discussions = discussionsData;
      })   
      this.moduleService.getModuleById(params.moduleId).subscribe((moduleData: any[]) => {
        console.log(moduleData[0]);
        this.moduleDetails = moduleData[0];
      })
    })
  }

  deletePost(discussionId){
    let r = confirm("Delete post: Are you sure?");
    if(r){
      this.discussionService.deleteDiscussion(discussionId).subscribe(() => {
        alert("Deleted post successfully");
      })
    }
  }

}
