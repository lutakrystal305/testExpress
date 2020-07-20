var mongoose= require('mongoose');
var sessionSchema = new mongoose.Schema({
});

var Session = mongoose.model('Session', sessionSchema, 'sessions');

module.exports = Session;