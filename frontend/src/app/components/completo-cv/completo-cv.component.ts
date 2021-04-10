import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';

// import { jsPDF } from "jspdf";
// import jsPDF from 'jspdf';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-completo-cv',
  templateUrl: './completo-cv.component.html',
  styleUrls: ['./completo-cv.component.css']
})
export class CompletoCvComponent implements OnInit {

  @ViewChild('htmlData') htmlData: ElementRef;

  PDF_Width;
  PDF_Height;
  USERS = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "sincere@april.biz",
      "phone": "1-770-736-8031 x56442"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "shanna@melissa.tv",
      "phone": "010-692-6593 x09125"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "email": "nathan@yesenia.net",
      "phone": "1-463-123-4447",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "email": "julianne@kory.org",
      "phone": "493-170-9623 x156"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "email": "lucio@annie.ca",
      "phone": "(254)954-1289"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },
    {
      "id": 7,
      "name": "Leanne Graham",
      "email": "sincere@april.biz",
      "phone": "1-770-736-8031 x56442"
    },
    {
      "id": 8,
      "name": "Ervin Howell",
      "email": "shanna@melissa.tv",
      "phone": "010-692-6593 x09125"
    },
    {
      "id": 9,
      "name": "Clementine Bauch",
      "email": "nathan@yesenia.net",
      "phone": "1-463-123-4447",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "email": "julianne@kory.org",
      "phone": "493-170-9623 x156"
    },
    {
      "id": 10,
      "name": "Chelsey Dietrich",
      "email": "lucio@annie.ca",
      "phone": "(254)954-1289"
    },
    {
      "id": 11,
      "name": "Mrs. Dennis",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },
    {
      "id": 12,
      "name": "Leanne Graham",
      "email": "sincere@april.biz",
      "phone": "1-770-736-8031 x56442"
    },
    {
      "id": 13,
      "name": "Ervin Howell",
      "email": "shanna@melissa.tv",
      "phone": "010-692-6593 x09125"
    },
    {
      "id": 14,
      "name": "Clementine Bauch",
      "email": "nathan@yesenia.net",
      "phone": "1-463-123-4447",
    },
    {
      "id": 15,
      "name": "Patricia Lebsack",
      "email": "julianne@kory.org",
      "phone": "493-170-9623 x156"
    },
    {
      "id": 16,
      "name": "Chelsey Dietrich",
      "email": "lucio@annie.ca",
      "phone": "(254)954-1289"
    },
    {
      "id": 17,
      "name": "Mrs. Dennis",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "sincere@april.biz",
      "phone": "1-770-736-8031 x56442"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "shanna@melissa.tv",
      "phone": "010-692-6593 x09125"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "email": "nathan@yesenia.net",
      "phone": "1-463-123-4447",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "email": "julianne@kory.org",
      "phone": "493-170-9623 x156"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "email": "lucio@annie.ca",
      "phone": "(254)954-1289"
    },
    {
      "id": 6,
      "name": "Mrs. Piedad",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },
    {
      "id": 6,
      "name": "Mrs. Taty",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },
    {
      "id": 6,
      "name": "Mrs. JOse",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },
    {
      "id": 6,
      "name": "Mrs. Marco",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },
    {
      "id": 6,
      "name": "Mrs. JUan",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },
    {
      "id": 6,
      "name": "Mrs. Maria",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },
    {
      "id": 6,
      "name": "Mrs. Carlos",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },
    {
      "id": 6,
      "name": "Mrs. Lala",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },
    {
      "id": 6,
      "name": "Mrs. Janeth",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },
    {
      "id": 6,
      "name": "Mrs. Janeth",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },

    {
      "id": 6,
      "name": "Mrs. Janeth",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },

    {
      "id": 6,
      "name": "Mrs. Janeth",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },

    {
      "id": 6,
      "name": "Mrs. Janeth",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },

    {
      "id": 6,
      "name": "Mrs. Janeth",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },

    {
      "id": 6,
      "name": "Mrs. Janeth",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },

    {
      "id": 6,
      "name": "Mrs. Janeth",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },

    {
      "id": 6,
      "name": "Mrs. Janeth",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },

    {
      "id": 6,
      "name": "Mrs. Janeth",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },

    {
      "id": 6,
      "name": "Mrs. Janeth",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },

    {
      "id": 6,
      "name": "Mrs. Janeth",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },

    {
      "id": 6,
      "name": "Mrs. Janeth",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },



  ];

  constructor(
    private librosService: LibrosService
  ) { }

  ngOnInit() {
    this.librosService.getLibros().subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }


  // public openPDF(): void {
  //   let DATA = document.getElementById('htmlData');

  //   html2canvas(DATA).then(canvas => {

  //     let fileWidth = 208;
  //     let fileHeight = canvas.height * fileWidth / canvas.width;

  //     var totalPDFPages = Math.ceil( $(".htmlData").width() / $(".htmlData").height()) - 1;

  //     const FILEURI = canvas.toDataURL('image/png')
  //     let PDF = new jsPDF('p', 'mm', 'a4');
  //     let position = 0;
  //     PDF.addImage(FILEURI, 'PNG', 15, position, fileWidth, fileHeight)


  //     for (var i = 1; i <= totalPDFPages; i++) {
  //       pdf.addPage(PDF_Width, PDF_Height);
  //       pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
  //     }

  //     PDF.addPage()

  //     PDF.text('ssad', 20, 20);
  //     PDF.save('angular-demo.pdf');


  //   });
  // }


  // public getPDF() {

  //   var HTML_Width = $("#htmlData").width();
  //   var HTML_Height = $("#htmlData").height();
  //   var top_left_margin = 10;
  //   var PDF_Width = HTML_Width + (top_left_margin * 2);
  //   var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 1.5);
  //   var canvas_image_width = HTML_Width;
  //   var canvas_image_height = HTML_Height;

  //   var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;


  //   html2canvas($("#htmlData")[0], { allowTaint: true }).then(function (canvas) {
  //     canvas.getContext('2d');

  //     console.log(canvas.height + "  " + canvas.width);
  //     var options = {
  //       pagesplit: true,
  //     };

  //     var imgData = canvas.toDataURL("image/jpeg", 1.0);
  //     var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
  //     pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);


  //     for (var i = 1; i <= totalPDFPages; i++) {
  //       pdf.addPage('5', 'portrait',);
  //       pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);


  //     }

  //     pdf.save("HTML-Document.pdf");
  //   });
  // }

  // getPDF() {


  //   //get table html
  //   const data = this.htmlData.nativeElement;
  //   //html to pdf format
  //   var html = htmlToPdfmake(data.innerHTML);

  //   const documentDefinition = { 
  //     content: html, 
  //     width:1300,
  //     // margin:[10,10,10,10]
  //   };
  //   pdfMake.createPdf(documentDefinition).download("Score_Details.pdf");


  // }

  public getPDF() {
    
    //get table html
    const data = this.htmlData.nativeElement;
    //html to pdf format
    var html = htmlToPdfmake(data.innerHTML);
   
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download();
    
  
  }

  // async getPDF() {
  //   const data = this.htmlData.nativeElement;
    
  //   let docDefinition = {
  //     content: [
  //       {
  //         image: await this.getBase64ImageFromURL(
  //           "https://images.pexels.com/photos/209640/pexels-photo-209640.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300"
  //         ),
  //         width: 100,
  //         text: 'PDF Generated with Image from external URL',
  //       },
  //       // {
  //       //   text: 'PDF Generated with Image from external URL',
  //       //   fontSize: 20
  //       // },

  //     ]
  //   };

  //   pdfMake.createPdf(docDefinition).download('CV.pdf');
  // }


  getBase64ImageFromURL(url) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossOrigin", "anonymous");

      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        resolve(dataURL);
      };

      img.onerror = error => {
        reject(error);
      };

      img.src = url;
    });
  }

  // public getPDF() {
  //   //get table html
  //   const data = this.htmlData.nativeElement;
  //   //html to pdf format
  //   var html = htmlToPdfmake(data.innerHTML);

   
  //   html2canvas($("#htmlData")[0], { allowTaint: true }).then(function (canvas) {
  //     canvas.getContext('2d');
  //     var imgData = canvas.toDataURL("image/png");
  //     // var data = canvas.toDataURL();
  //     const docDefinition = {
  //       content: [{
  //         image: imgData,
  //         width: 500,
  //       }]
  //     };
  //     pdfMake.createPdf(docDefinition).download("Score_Details.pdf");


  //   });
  // }

}