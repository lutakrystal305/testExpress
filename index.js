require('dotenv').config();

var express = require('express');
var app = express();

var usersRoute= require('./Route/users.route');
var authRoute= require('./Route/auth.route');
var productRoute= require('./Route/product.route');
var cartRoute= require('./Route/cart.route');
var transferRoute= require('./Route/transfer.route')

var authMiddleware= require('./middleware/auth.middleware');
var sessionMiddleware= require('./middleware/session.middleware');




var bodyParser= require('body-parser');
var cookieParser = require('cookie-parser');
var csurf = require('csurf');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);
app.use(csurf({ cookie: true }));

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
app.use('/products', productRoute);
app.use('/cart', cartRoute);
app.use('/transfer', authMiddleware.requireAuth, transferRoute);

app.listen(port, function() {
	console.log('Example app listening on port'+port);
});