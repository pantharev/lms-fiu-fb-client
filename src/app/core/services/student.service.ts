import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get(`${environment.apiURL}/students`);
  }

  addStudent(student) {
    return this.http.post(`${environment.apiURL}/students`, student);
  }

  updateStudent(email, student) {
    return this.http.put(`${environment.apiURL}/students/`, student);
  }

  getStudentByEmail(studentEmail){
    return this.http.get(`${environment.apiURL}/students/${studentEmail}`);
  }
}
