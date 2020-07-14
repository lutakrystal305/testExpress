
var Session= require('../models/session.model');

module.exports = function(req, res, next) {
  if (!req.signedCookies.sessionId) {
    var session= new Session();
    session.save();
    var sessionId = session._id;
    res.cookie('sessionId', sessionId, {
      signed: true
    });

    
  }

  next();
}