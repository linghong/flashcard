const puppeteer =require('puppeteer');
const sessionFactory = require('../factories/sessionFactory');
const userFactory = require('../factories/userFactory');

class CustomPage {
	static async build (){
		const browser = await puppeteer.launch({
				headless: false
		});

		//the sandbox method currently does not work in travis ci.
		/*browser = await puppeteer.launch({
			args: ['--no-sandbox', '--disable-setuid-sandbox']
		});*/

		const page = await browser.newPage();
		const customPage = new CustomPage(page);

		return new Proxy(customPage,{
			get: function(target, property){
				return customPage[property] ||browser[property]||page[property];
			}
		});	
	}

	constructor(page){
		this.page =page;
	}

	async login(){
		const user = await userFactory();
		const {session, sig } = sessionFactory(user);

		//set session and session.sig cookies
		await this.page.setCookie({ name: 'session', value: session });
		await this.page.setCookie({ name: 'session.sig', value: sig });
		//after set cookie, then need to refresh the browser
		await this.page.goto('localhost:3000');
		await this.page.waitFor('a[href="/api/logout"]');
	}


}

module.exports = CustomPage;