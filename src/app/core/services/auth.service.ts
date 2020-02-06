import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  FBLogin() {
    return this.http.get(`${environment.apiURL}/auth/login`);
  }

  FBLogOut(){
    return this.http.get(`${environment.apiURL}/auth/logout`);
  }

  FBFacebook(){
    return this.http.get(`${environment.apiURL}/auth/facebook`);
  }

  getProfile() {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(`${environment.apiURL}/profile`, {headers: headers});
  }
}
