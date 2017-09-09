// server.js
// where your node app starts

// init project
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var multer = require('multer');
var upload = multer();
var app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/upload", upload.single('files'), function (request, response) {
  response.send({"size": request.file.size});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
