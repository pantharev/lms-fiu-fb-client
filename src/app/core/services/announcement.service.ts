import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  private checkedCourses = new BehaviorSubject([0]);
  sharedCheckedCourses = this.checkedCourses.asObservable();

  constructor(private http: HttpClient) { }

  nextCheckedCourses(checkedCourses: number[]){
    this.checkedCourses.next(checkedCourses);
  }

  createAnnouncement(user, content, created, changed, user_id){
    let announcement = {
      user: user,
      content: content,
      created: created,
      changed: changed,
      user_id: user_id
    };
    return this.http.post(`${environment.apiURL}/announcements`, announcement);
  }

  fetchAnnouncements(){
    return this.http.get(`${environment.apiURL}/announcements`);
  }

  fetchAnnouncementsByCourseId(id){
    return this.http.get(`${environment.apiURL}/announcements/${id}`);
  }

  updateAnnouncement(id, content, changed){
    let announcement = {
      id: id,
      content: content,
      changed: changed
    }
    return this.http.put(`${environment.apiURL}/announcements/${id}`, announcement);
  }

  deleteAnnouncement(id){
    return this.http.delete(`${environment.apiURL}/announcements/${id}`);
  }
}
