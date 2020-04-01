import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class GlobalAnnouncementService {

  constructor(private http: HttpClient) { }

  createGlobalAnnouncement(user, content, created, changed, user_id){
    let globalAnnouncement = {
      user: user,
      content: content,
      created: created,
      changed: changed,
      user_id: user_id
    };
    return this.http.post(`${environment.apiURL}/globalAnnouncements`, globalAnnouncement);
  }

  fetchGlobalAnnouncements(){
    return this.http.get(`${environment.apiURL}/globalAnnouncements`);
  }

  fetchGlobalAnnouncementById(id){
    return this.http.get(`${environment.apiURL}/globalAnnouncements/${id}`);
  }

  updateGlobalAnnouncement(id, content, changed){
    let globalAnnouncement = {
      content: content,
      changed: changed
    };
    return this.http.put(`${environment.apiURL}/globalAnnouncements/${id}`, globalAnnouncement);
  }

  deleteGlobalAnnouncement(id){
    return this.http.delete(`${environment.apiURL}/globalAnnouncements/${id}`);
  }
}
