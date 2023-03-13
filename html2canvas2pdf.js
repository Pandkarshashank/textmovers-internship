// import html2canvas from 'html2canvas'
// import jsPdf from 'jspdf'

const { default: html2canvas } = require("html2canvas")
const { default: jsPDF } = require("jspdf")

const button = document.querySelector('.savePDF')

function printPDF () {
    console.log('Okay Here!')
    const domElement = document.getElementById('your-id')
    html2canvas(domElement, { onclone: (document) => {
      document.getElementById('print-button').style.visibility = 'hidden'
    }})
    .then((canvas) => {
        const img = canvas.toDataURL('image/png')
        const pdf = new jsPdf()
        pdf.addImage(imgData, 'JPEG', 0, 0, width, height)
        pdf.save('your-filename.pdf')
})}

button.addEventListener('click',printPDF)
