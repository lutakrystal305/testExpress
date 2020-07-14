require('dotenv').config();

var express = require('express');
var app = express();

var bodyParser= require('body-parser');
var cookieParser = require('cookie-parser');
var csurf = require('csurf');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/express-demo');


var usersRoute= require('./Route/users.route');
var authRoute= require('./Route/auth.route');
var productRoute= require('./Route/product.route');
var cartRoute= require('./Route/cart.route');
var transferRoute= require('./Route/transfer.route');

var apiProductRoute= require('./api/Route/product.route');

var authMiddleware= require('./middleware/auth.middleware');
var sessionMiddleware= require('./middleware/session.middleware');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/products', apiProductRoute);

app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);


var port= 3005;



app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));


app.get('/',function(req, res){
 res.render('index',
  {name: 'Luta Krystal'}
);
});
app.use('/users', authMiddleware.requireAuth, usersRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);
app.use('/transfer', authMiddleware.requireAuth, transferRoute);



//app.use(csurf({ cookie: true }));

app.listen(port, function() {
	console.log('Example app listening on port'+port);
});