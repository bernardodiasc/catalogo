var express = require('express');
var path = require('path');
var opn = require("opn");

var app = express();

app.set('port', 5000);
app.use('/legacy', express.static(path.join(__dirname, 'build')));

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Server running on port ' + port);
  opn('http://localhost:'+port+'/legacy');
});
