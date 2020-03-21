import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {

  constructor(private http: HttpClient) { }

  createDiscussion(user, post, created, changed, module_id, user_id){
    let discussion = {
      user: user,
      post: post,
      created: created,
      changed: changed,
      module_id: module_id,
      user_id: user_id
    }

    return this.http.post(`${environment.apiURL}/discussions`, discussion);
  }

  getDiscussionsInModule(moduleId) {
    return this.http.get(`${environment.apiURL}/discussions/m/${moduleId}`);
  }

  updateDiscussion(post, changed, discussionId){
    let discussion = {
      post: post,
      changed: changed
    }
    return this.http.put(`${environment.apiURL}/discussions/${discussionId}`, discussion);
  }

  deleteDiscussion(discussionId){
    return this.http.delete(`${environment.apiURL}/discussions/${discussionId}`);
  }

}
