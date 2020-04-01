import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DiscussionService } from '@app/core/services/discussion.service';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  editPostForm: FormGroup;
  submitted = false;
  discussions;

  @Input() discussionData;

  constructor(private modalService: NgbModal, private fb: FormBuilder, private discussionService: DiscussionService) { }


  ngOnInit(): void {
    this.makeForm();
  }

  get up() { return this.editPostForm.controls; }

  makeForm(){
    this.editPostForm = this.fb.group({
      post: ['', Validators.required]
    })
  }

  open(content) {
    this.editPostForm.get('post').setValue(this.discussionData.post);
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  updatePost(post){
    this.submitted = true;

    if(!this.editPostForm.valid){
      return;
    }

    let today = new Date();
    this.discussionService.updateDiscussion(post, today, this.discussionData.discussion_id).subscribe(() => {
      alert("Updated post");
    })
  }

}
