import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pdf-dpwnload',
  templateUrl: './pdf-dpwnload.component.html',
  styleUrls: ['./pdf-dpwnload.component.css']
})
export class PdfDpwnloadComponent {

  constructor(private httpClient: HttpClient) { }

  downloadPdf() {
    const pdfUrl = 'http://localhost:8080/api/download-pdf'; // Spring Boot tarafındaki PDF servisinin URL'si

    window.open(pdfUrl, '_blank'); // Yeni sekmede dosya açılacak

    this.httpClient.get(pdfUrl, { responseType: 'blob' }).subscribe(response => {
      const blob = new Blob([response], { type: 'application/pdf' });
      saveAs(blob, 'ozgucResumeUpdated.pdf'); // İndirilen dosyanın adını belirleyebilirsiniz
    });
  }

}
function saveAs(blob: Blob, arg1: string) {
 
}

