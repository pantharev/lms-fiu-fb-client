import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsService {

  constructor(private http: HttpClient) { }

  createCourseDetails(course_id, content){
    const courseDetails = {
      content: content,
      course_id: course_id
    };
    return this.http.post(`${environment.apiURL}/courseDetails`, courseDetails);
  }

  getCourseDetails(courseId){
    return this.http.get(`${environment.apiURL}/courseDetails/${courseId}`);
  }

  updateCourseDetails(id, content){
    const courseDetails = {
      content: content
    };
    return this.http.put(`${environment.apiURL}/courseDetails/u/${id}`, courseDetails);
  }

  clearCourseDetails(id){
    return this.http.put(`${environment.apiURL}/courseDetails/c/${id}`, '');
  }
}
