import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailNotificationService {

  constructor(private http: HttpClient) { }

  sendMessage(body){
    console.log("service telling server.js to send message");
    console.log(body);
    console.log("posting to " + environment.apiURL + "/sendmail");
    return this.http.post(`${environment.apiURL}/sendmail`, body);
  }
}
