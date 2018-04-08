const puppeteer =require('puppeteer');

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

}

module.exports = CustomPage;