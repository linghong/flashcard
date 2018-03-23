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
	//await browser.close();
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

test.only('when signed in, it will display logout button', async () =>{
	const keys = require('../config/keys');

	//session
	const sessionObject = {
		passport: {
			user: keys.userTestId
		}
	};
	const buffer = require('safe-buffer').Buffer;
	const sessionString = Buffer.from(JSON.stringify(sessionObject))
								.toString('base64');

	//session.sig
	const Keygrip = require('keygrip');
	const keygrip = new Keygrip([keys.cookieKey]);
	const sig = keygrip.sign('session=' + sessionString);

	//set session and session.sig cookies
	await page.setCookie({ name: 'session', value: sessionString });
	await page.setCookie({ name: 'session.sig', value: sig });
	//after set cookie, then need to refresh the browser
	await page.goto('localhost:3000');

	const text = await page.$eval('a[href="/api/logout"]', el =>el.innerHTML);
	expect(text).toEqual('LOGOUT');
});

//session=eyJwYXNzcG9ydCI6eyJ1c2VyIjoiNWEzNWVlOGE1NDY1OTQ0YWJkZmU1NjQ5In19
//session.sig=AGfnDpnNDG41qcOnLoXe6Ebw4LQ