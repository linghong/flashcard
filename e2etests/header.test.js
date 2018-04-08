const Page = require('./helpers/page');

let page;

beforeEach(async () => {
	jest.setTimeout(30000);
	page = await Page.build();
	//need to add http://, otherwise it won't work in ci
	await page.goto('http://localhost:3000');
});

afterEach(async () =>{
	await page.close();
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
		await page.login();
		
		const text = await page.$eval('a[href="/api/logout"]', el =>el.innerHTML);
		expect(text).toEqual('LOGOUT');
});
