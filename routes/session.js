

/*
 * GET home page.
 */
var session = require('../session.json');
 
exports.view = function(req, res){
  res.render('session',{
	  "sessions": session.sessions,
  });
};