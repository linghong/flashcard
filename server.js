import http from 'http';

const server = http.createServer();

server.on('request', (req, res)=>{
	res.write('Hello!\n');
	setTimeout(()=>{
		res.write('hello again\n');
		res.end();
	}, 3000);
});

server.listen(8080);