var http = require('http');

var app = http.createServer((req,res)=>{
	res.write("Welcome to my Node Application\n");
	res.end();
});

app.listen(3000,()=>{
	console.log('server listening on 3000');
});