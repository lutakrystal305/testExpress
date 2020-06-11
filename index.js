var express = require('express');
var app = express();
var port = 3005;
app.get('/',(req, res) => res.send('What else?'));
app.listen(port, () => console.log('Example app listening on port'+port));