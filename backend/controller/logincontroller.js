'use strict';
var login = require('../model/login');



//function to  get all user

exports.getAll = function(req, res) {
    login.getAlluser(function(err, user) {
      if (err)
        res.send(err);
      res.send(user);
    });
  };

