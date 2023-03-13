window.jsPDF = window.jspdf.jsPDF;
var docPDF = new jsPDF();
const buttons = document.querySelector('#printButton')
function print(){
    buttons.style.display = 'Hidden'
        docPDF.html(elementHTML, {
            callback: function(docPDF) {
                    docPDF.save();
                },
            x: 15,
            y: 15,
            width: 170,
            windowWidth: 650
        });
    }