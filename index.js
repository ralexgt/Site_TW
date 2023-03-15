const express = require('express');
app = express();
console.log('Folder proiect', __dirname);

app.get('/ceva', function (req, res) {
	res.send('altceva');
});

app.get('/index.html', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.listen(8080);
