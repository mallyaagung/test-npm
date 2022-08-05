var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function (req, res) {   // 2 - creating server

    res.end("Hello there!")
});

server.listen(8080); //3 - listen for any incoming requests

console.log('Node.js web server at port 8080 is running..')