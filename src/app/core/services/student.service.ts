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

  getStudentById(user_id){
    return this.http.get(`${environment.apiURL}/students/:${user_id}`);
  }

  addStudent(){
    return this.http.get(`${environment.apiURL}/addstudent`);
  }
}
