import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private http: HttpClient) { }

  addPDF(formData) {
    return this.http.post(`${environment.apiURL}/testpdf`, formData);
  }
}
