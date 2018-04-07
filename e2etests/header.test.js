const puppeteer = require('puppeteer');
const sessionFactory = require('./factories/sessionFactory');
const userFactory = require('./factories/userFactory');

let browser, page

beforeEach(async () => {
	jest.setTimeout(30000)
	//the sandbox method currently does not work in travis ci.
	/*browser = await puppeteer.launch({
		headless: false
	});*/
	browser = await puppeteer.launch({
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	});
	page = await browser.newPage();
	//need to add http://, otherwise it won't work in ci
	await page.goto('http://localhost:3000');
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

test('when signed in, it will display logout button', async () =>{
	const start = Date.now();
	const user = await userFactory();
	const {session, sig } = sessionFactory(user);

	//set session and session.sig cookies
	await page.setCookie({ name: 'session', value: session });
	await page.setCookie({ name: 'session.sig', value: sig });
	//after set cookie, then need to refresh the browser
	await page.goto('localhost:3000');
	await page.waitFor('a[href="/api/logout"]');
	const text = await page.$eval('a[href="/api/logout"]', el =>el.innerHTML);
	expect(text).toEqual('LOGOUT');
});
