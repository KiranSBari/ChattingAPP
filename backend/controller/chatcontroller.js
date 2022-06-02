'use strict';
var chat = require('../model/chat');



//function to  get all user

exports.getAll = function(req, res) {
    try {
    chat.getAllchat(function(err, user) {
        if (err)
        res.send(err);
      res.send({
        'Success':true,
        'Message':'Data Found',
        'Payload':user
      })
      });
  }
  catch(ex){
    console.log(ex);
    res.send({
      'Success':false,
      'code':'EX_DB',
      'Message':'Got Exception from DB',
      'Payload':ex
    })  
  }
}

// INSERT DATA //
exports.insert = function (req, res) {
    var new_chat = req.body;
    try {
      chat.insertchat(new_chat, function (err, chat) {
        if (err) {
          console.log(err)
          res.send({
            'Success':false,
            'code':'ERR_DB',
            'Message':'Got Error',
            'Payload':err
          })
        }
        else {
          // console.log(list);
          res.send({
            'Success':true,
            'Message':'Data Enter Succefully',
            'Payload':chat[0]
          })
        }
      });
    }
    catch(ex){
      console.log(ex);
      res.send({
        'Success':false,
        'code':'EX_DB',
        'Message':'Got Exception from DB',
        'Payload':ex
      })
  
    }
  };
  

