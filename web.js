
var express = require('express');

var app = express.createServer(express.logger());

var file = fs.readFileSync('index.html', "utf8");

app.get('/', function(request, response) {
   response.send('text' + file.toString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
