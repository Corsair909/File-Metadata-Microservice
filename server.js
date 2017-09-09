var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var app = express();
app.use(bodyParser.json());
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});

var upload = multer({storage : storage}).array('userFile', 2);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/api/file_data', function(req, res) {
  upload(req, res, function(err) {
    if (err) {
      return res.end("Error uploading file.");
    }
    res.end("File is uploaded");
  });
});

app.listen(process.env.PORT, function() {
  console.log(`Working on port ${process.env.PORT}`);
});