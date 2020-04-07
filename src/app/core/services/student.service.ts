import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  /*
  getStudents() {
    return this.http.get(`${environment.apiURL}/students`);
  }
  */

  getStudents(pageNo, npp) {
    let params = new HttpParams().set("page", pageNo).set("npp", npp);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(`${environment.apiURL}/students`, {headers: headers, params: params});
  }

  getInstructors(){
    return this.http.get(`${environment.apiURL}/students/i`);
  }

  addStudent(student) {
    return this.http.post(`${environment.apiURL}/students`, student);
  }

  updateStudent(student) {
    return this.http.put(`${environment.apiURL}/students/`, student);
  }

  getStudentById(id){
    console.log("Called getStudentById");
    console.log(id);
    return this.http.get(`${environment.apiURL}/students/${id}`);
  }
  getStudentByEmail(email){
    console.log("Called getStudentByEmail");
    console.log(email);
    return this.http.get(`${environment.apiURL}/students/email/${email}`);
  }

  deleteStudent(id){
    return this.http.delete(`${environment.apiURL}/students/${id}`);
  }
}
