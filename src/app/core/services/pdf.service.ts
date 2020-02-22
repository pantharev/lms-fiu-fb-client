import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private http: HttpClient) { }

  addPDF(formData) {
    return this.http.post<any>(`${environment.apiURL}/pdfs`, formData);
  }

  fetchPDFs(courseId): Observable<any> {
    return this.http.get(`${environment.apiURL}/pdfs/${courseId}`);
  }

  fetchPDFsTest() {

  }
}
