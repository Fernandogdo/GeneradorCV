import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
// import jsPDF from 'jspdf';
// import { jsPDF } from "jspdf";

@Component({
  selector: 'app-completo-cv',
  templateUrl: './completo-cv.component.html',
  styleUrls: ['./completo-cv.component.css']
})
export class CompletoCvComponent implements OnInit {
  @ViewChild('content') content: ElementRef;


  constructor(
    private librosService: LibrosService
  ) { }

  ngOnInit() {
    this.librosService.getLibros().subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  // public downloadPDF() {
  //   const DATA = this.content.nativeElement;
  // const doc: jsPDF = new jsPDF("p", "mm", "a4");
  // doc.html(DATA, {
  //    callback: (doc) => {
  //      doc.output("dataurlnewwindow");
  //    }
  // });

  //   doc.save('test.pdf');
  // }
  // title = 'htmltopdf';


}
