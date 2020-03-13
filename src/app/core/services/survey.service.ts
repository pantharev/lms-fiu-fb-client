import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  addSurvey(name, link, module_id) {
    const survey = {
      name: name,
      link: link,
      module_id: module_id
    }
    return this.http.post(`${environment.apiURL}/surveys`, survey);
  }

  fetchSurveys(courseId) {
    return this.http.get(`${environment.apiURL}/surveys/${courseId}`);
  }

  updateSurvey(name, link, surveyId) {
    const survey = {
      name: name,
      link: link
    }
    return this.http.put(`${environment.apiURL}/surveys/${surveyId}`, survey);
  }

  deleteSurvey(surveyId) {
    return this.http.delete(`${environment.apiURL}/surveys/${surveyId}`);
  }
}
