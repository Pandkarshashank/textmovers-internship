import puppeteer from './node_modules/puppeteer' 
// const puppeteer = require('puppeteer')

const button = document.querySelector('.savePDF')


async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://youtube.com', {waitUntil: 'networkidle0'});
  const pdf = await page.pdf({ format: 'A4' });
  const blob = new Blob(pdf, {type: 'application/pdf'})
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(blob)
  link.download = `your-file-name.pdf`
  link.click()
  await browser.close()
  return pdf
}
// Usage
button.addEventListener('click',()=>{
  console.log('Okay')
printPDF().then(pdf => {

})})

//  button.addEventListener('click',()=>{
//   console.log('Okay')
//   printPDF().then(pdf => {
// 	const blob = new Blob(pdf, {type: 'application/pdf'})
//   const link = document.createElement('a')
//   link.href = window.URL.createObjectURL(blob)
//   link.download = `your-file-name.pdf`
//   link.click()
// })})
 