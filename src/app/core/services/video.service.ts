import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  addVideo(link, module_id) {
    const video = {
      link: link,
      module_id: module_id
    }
    return this.http.post(`${environment.apiURL}/videos`, video);
  }

  fetchVideos(courseId) {
    return this.http.get(`${environment.apiURL}/videos/${courseId}`);
  }
}
