const puppeteer = require('puppeteer');

let browser, page

beforeEach(async () => {
	jest.setTimeout(10000)
	browser = await puppeteer.launch({
		headless: false
	});
	page = await browser.newPage();
	await page.goto('localhost:3000');
});

afterEach(async () =>{
	await browser.close();
});

test('The browser logo text is correct', async ()=>{	
	const text = await page.$eval('a.logo', el => el.innerHTML);
	expect(text).toEqual('Vacubulary Pro')
})