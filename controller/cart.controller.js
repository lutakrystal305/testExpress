var mongoose= require('mongoose');


var Session= require('../models/session.model');

module.exports.addToCart = function(req, res, next) {
  var productId = req.params.productId;
  var sessionId = req.signedCookies.sessionId;

  if (!sessionId) {
    res.redirect('/products');
    return;
  }

  var count = db
    .get('sessions')
    .find({ _id: sessionId })
    .get('cart.' + productId, 0)
    .value();

  db.get('sessions')
    .find({ sId: sessionId })
    .set('cart.' + productId, count + 1)
    .write();

  res.redirect('/products');
};