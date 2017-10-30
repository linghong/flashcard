const config = require('./config');
const apiRouter = require('./api');
const express = require('express');
const fs = require('fs');

const server = express();

server.get('/', (req, res)=>{
	res.send('Hello!\n');
});

server.use('/api', apiRouter);

/*	
//without using middle ware
//The below code is the way to fetch file and display in the browser 
fs.readFile('./about.html', (err, data)=>{
		res.send(data.toString());
	});
});
*/
//using middleware, and move the about.html to the public folder.
server.use(express.static('public'));


server.listen(config.port, ()=>{
	console.info('Express is listening on port ', config.port);
});