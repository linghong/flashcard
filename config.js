const env = process.env;

const nodeEnv =env.NODE_ENV || 'development';
module.exports=nodeEnv;

const logStars = function(message){
	console.info('***********');
	console.info(message);
	console.info('***********');
}
module.exports = logStars;

const config = {
	port: env.PORT || 8080
};
module.exports = config;
