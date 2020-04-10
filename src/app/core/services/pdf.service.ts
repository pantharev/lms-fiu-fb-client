import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private http: HttpClient) { }

  addPDF(pdfUrl, module_id) {
    let pdfObj = {
      pdf: pdfUrl,
      module_id: module_id
    }
    return this.http.post<any>(`${environment.apiURL}/pdfs`, pdfObj);
  }

  fetchPDFs(courseId): Observable<any> {
    return this.http.get(`${environment.apiURL}/pdfs/${courseId}`);
  }

  updatePDF(pdfUrl, pdfID){
    let pdfObj = {
      pdf: pdfUrl
    }
    return this.http.put(`${environment.apiURL}/pdfs/${pdfID}`, pdfObj);
  }

  deletePDF(pdfID){
    return this.http.delete(`${environment.apiURL}/pdfs/${pdfID}`);
  }
}
