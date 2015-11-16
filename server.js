var express = require('express');
var app = express();

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/test-page.html');
});

app.listen(3000, function () {
    console.log('App is listening');
});