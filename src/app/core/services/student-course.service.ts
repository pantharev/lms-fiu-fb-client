import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentCourseService {

  constructor(private http: HttpClient) { }
  
  getStudentsByCourseId(id) {
    return this.http.get(`${environment.apiURL}/student-courses/c/${id}`);
  }

  getCoursesByStudentId(id) {
    return this.http.get(`${environment.apiURL}/student-courses/s/${id}`);
  }

  getAvgStudentPoints(courseId, studentId){
    return this.http.get(`${environment.apiURL}/student-courses/p/${courseId}/${studentId}`);
  }

  enrollStudentToCourse(student_email, course_id, enrollment_status) {
    const student_course = {
      student_email: student_email,
      course_id: course_id,
      enrollment_status: enrollment_status
    }
    return this.http.post(`${environment.apiURL}/student-courses`, student_course);
  }

  acceptStudentEnrollment(student_email, course_id, enrollment_status) {
    const student_course = {
      student_email: student_email,
      course_id: course_id,
      enrollment_status: enrollment_status
    };
    console.log(student_course);
    return this.http.put(`${environment.apiURL}/student-courses/${student_email}`, student_course);
  }

  declineStudentEnrollment(student_id, course_id) {
    return this.http.delete(`${environment.apiURL}/student-courses/${student_id}/${course_id}`);
  }
}
