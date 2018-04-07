const buffer = require('safe-buffer').Buffer;
const keys = require('../../config/keys');
const Keygrip = require('keygrip');
const keygrip = new Keygrip([keys.cookieKey]);

/*module.exports = (user) => {
	const sessionObject = {
		passport: {
			user: user._id.toString()
		}
	};
	*/

module.exports = () => {
	const sessionObject = {
		passport: {
			user: keys.userTestId
		}
	};
	const session = Buffer.from(JSON.stringify(sessionObject))
								.toString('base64');	
	const sig = keygrip.sign('session=' + session);
	return { session, sig };
}

	