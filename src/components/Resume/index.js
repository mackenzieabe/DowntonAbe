import React from 'react';
import resumeHtml from  '../../index.html'
// import resume from '../../assets/myresume.pdf';
// import { Document, Page, pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume() {
//   const [ numPages, setNumPages] = useState(null);
//   const [pageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

  return (
    <div>
    {resumeHtml}
      
    </div>
  );
}
export default Resume;