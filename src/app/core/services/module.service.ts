import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http: HttpClient) { }

  
  addModule(courseId, number, title, lockedUntil) {
    const moduleO = {
      number: number,
      title: title,
      lockedUntil: lockedUntil
    };
    return this.http.post(`${environment.apiURL}/modules/${courseId}`, moduleO);
  }
  
  getModuleById(id) {
    return this.http.get(`${environment.apiURL}/modules/m/${id}`);
  }

  getModulesByCourseId(id) {
    return this.http.get(`${environment.apiURL}/modules/c/${id}`);
  }

  updateModule(moduleId, number, title, lockedUntil) {
    const moduleO = {
      number: number,
      title: title,
      lockedUntil: lockedUntil
    };
    return this.http.put(`${environment.apiURL}/modules/${moduleId}`, moduleO);
  }

  deleteModule(moduleId) {
    return this.http.delete(`${environment.apiURL}/modules/${moduleId}`);
  }
}
