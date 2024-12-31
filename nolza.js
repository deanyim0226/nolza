const puppeteer = require('puppeteer');
// Array of file names or paths
const files = [
  'bbq.html',
  'fried.html',
  'kfood.html',
  'ksnack.html',
  'soup.html',
  'stir-fry.html',
  'lunch.html'
  // Add more file names or paths as needed
];


(async () => {
  const browser = await puppeteer.launch();

  for(const file of files){ 
    const page = await browser.newPage();
  
    // Load the HTML file
    
    await page.goto(`file://${__dirname}/${file}`, { waitUntil: 'networkidle2' });
  
    // Generate PDF

    const outputFileName = file.replace('.html', '.pdf')

    await page.pdf({
      path: outputFileName,
      format: 'A4',
      printBackground: true, // Ensures CSS background is included
    });
  }


  await browser.close();
})();