import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseAnnouncementService {

  constructor(private http: HttpClient) { }

  createCourseAnnouncement(course_id, announcement_id){
    let courseAnnouncement = {
      course_id: course_id,
      announcement_id: announcement_id
    };
    return this.http.post(`${environment.apiURL}/courseAnnouncements`, courseAnnouncement);
  }

  fetchCourseAnnouncements(){
    return this.http.get(`${environment.apiURL}/courseAnnouncements`);
  }

  fetchCourseAnnouncementById(id){
    return this.http.get(`${environment.apiURL}/courseAnnouncements/${id}`);
  }

  updateCourseAnnouncement(id, course_id, announcement_id){
    let courseAnnouncement = {
      course_id: course_id,
      announcement_id: announcement_id
    };
    return this.http.put(`${environment.apiURL}/courseAnnouncements/${id}`, courseAnnouncement);
  }

  deleteCourseAnnouncement(id){
    return this.http.delete(`${environment.apiURL}/courseAnnouncements/${id}`);
  }
  
}
