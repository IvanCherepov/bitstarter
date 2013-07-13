var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var buffer = new Buffer(8);

buffer.write(fs.readFileSync('index.thml','utf8'));

var data = fs.readFileSync('index.thml','utf8');

app.get('/', function(request, response) {
  response.send(data);
 {
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
