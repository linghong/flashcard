const puppeteer = require('puppeteer');

let browser, page

beforeEach(async () => {
	jest.setTimeout(100000)
	browser = await puppeteer.launch({
		headless: false
	});
	page = await browser.newPage();
	await page.goto('localhost:3000');
});

afterEach(async () =>{
	await browser.close();
});

test('The text of the logo is correct', async ()=>{	
	const text = await page.$eval('a.logo', el => el.innerHTML);
	expect(text).toEqual('Vacubulary Pro')
});

test('clicking login starts the OAuth2 flow', async () =>{
	const text = await page.click('.right a');
	const url = await page.url();
	expect(url).toMatch(/accounts\.google\.com/);
});

