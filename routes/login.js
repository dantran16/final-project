/*
 * GET login
 */
var sessions = require('../session.json');

var sessions = require('../session.json'); 

exports.view = function(req, res) {
    res.render('login');
};
