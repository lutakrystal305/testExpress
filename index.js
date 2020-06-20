var express = require('express');
var app = express();


var usersRoute= require('./Route/users.route');
var authRoute= require('./Route/auth.route');

var authMiddleware= require('./middleware/auth.middleware');


var bodyParser= require('body-parser');
var cookieParser = require('cookie-parser');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());


var port= 3005;



app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));


app.get('/',function(req, res){
 res.render('index',
  {name: 'Thúy Hằng'}
);
});
app.use('/users', authMiddleware.requireAuth, usersRoute);
app.use('/auth', authRoute);
app.listen(port, function() {
	console.log('Example app listening on port'+port);
});