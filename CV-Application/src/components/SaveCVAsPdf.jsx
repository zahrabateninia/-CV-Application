import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const SaveCVAsPdf = () => {
    const generatePdf = () => {
        const cvElement = document.querySelector('.cv-container');
        html2canvas(cvElement, { scale: 2 }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');

            // Convert rem to points
            const widthInPoints = 55 * 16 * 0.75; 
            const heightInPoints = 57 * 16 * 0.75; 

            const pdf = new jsPDF('portrait', 'pt', [widthInPoints, heightInPoints]);
            
            pdf.addImage(imgData, 'PNG', 0, 0, widthInPoints, heightInPoints);
            pdf.save('resume.pdf');
        });
    };

    return (
        <button className="save-cv-btn" onClick={generatePdf}>
            <>
                <FaDownload />
                Download CV
            </>
        </button>
    );
};

export default SaveCVAsPdf;
