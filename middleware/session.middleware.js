
var Session= require('../models/session.model');

module.exports =async function(req, res, next) {
  if (!req.signedCookies.sessionId) {
    var session= await Session.create(req.body);
    var sessionId = session._id;
    res.cookie('sessionId', sessionId, {
      signed: true
    });

    
  }

  next();
}