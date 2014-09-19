var http = require('http');
var fs   = require('fs');
http.createServer(function(req, res){
	var fileName = 'Hello.txt';

	fs.readFile('./' + fileName, function(error){
		if(error){
			res.writeHead(500);
			res.end();
		} else {
			res.writeHead(200, {'Content-Type' : 'text'});
			var fileStream = fs.createReadStream(fileName);
			fileStream.pipe(res);
		}
	});
	
	
}).listen(8124, '127.0.0.1');
