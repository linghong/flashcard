import config from './config';
import express from 'express';

const server = express();

server.get('/', (req, res)=>{
	res.write('Hello!\n');
	setTimeout(()=>{
		res.write('hello again\n');
		res.end();
	}, 3000);
});

server.listen(config.port, ()=>{
	console.info('Express is listening on port ', config.port);
});