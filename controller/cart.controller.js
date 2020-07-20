var mongoose= require('mongoose');


var Session= require('../models/session.model');

module.exports.addToCart = async function(req, res, next) {
  var productId = req.params.productId;
  var sessionId = req.signedCookies.sessionId;

  if (!sessionId) {
    res.redirect('/products');
    return;
  }

await Session.findOneAndUpdate({_id: sessionId},
 {$inc: {["cart." + productId]:1}});
  res.redirect('/products');
};