var express = require('express');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');

app.use(cors());

var authCheck = jwt({
	secret: new Buffer('WdLmTebU2zcQ4tKQE8hHXWJaHSt_qOmzh5Y7vbGG3iuJAYqeNfnxBCshMBapR1Sx','base64'),
	audience: "vM5FLjJ5nHFnhOBGnT8KL6VIrbJHUV5u"
})

app.get('/api/public', function (req, res) {
	res.json({ message: "Hello from"})
});

app.get('/api/private', authCheck, function (req, res) {
	res.json({ message: "This is private end point, You do need authentication"})
});

app.listen(8000);
console.log('listening');