// See https://github.com/GoogleChrome/puppeteer/issues/306
const puppeteer = require('puppeteer')

const config = {
  url: 'https://www.foreca.fi/Finland/Tammela/Kyynara',
  elemId: 'mgwrap'
};

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1024,
    height: 1024
  })
  await page.goto(config.url);
  setTimeout(async () => {
    const r = await page.evaluate((queryPath) => {
      var elem = document.querySelector(queryPath)
      var rect = elem.getBoundingClientRect()
      return {
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height
      }
    }, '#' + config.elemId)

    await page.screenshot({
      path: 'example.png',
      clip: r
    });
    await browser.close();
  }, 8000)
})();
