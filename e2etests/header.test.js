const puppeteer = require('puppeteer');

test('we can launch a browser', async ()=>{
	jest.setTimeout(10000)
	const browser = await puppeteer.launch({
		headless: false
	});
	const page = await browser.newPage();
})