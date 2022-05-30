'use strict';
var Chatting = require('../model/Chattingdal');



//function to  get all chatting
exports.getAll = function (req, res) {
    Chatting.getAllChat(function (err, chat) {
        if (err)
            res.send(err);
        res.send(chat);
    });
};

//code to get count of feedback
exports.getFullSummary = function (req, res) {
    Chatting.summary(function (err, sum_back) {
        if (err)
            res.send(err);
        res.send(sum_back[0]);
    });
};


//code to insert new chat
exports.insert = function (req, res) {
    var new_message = req.body;
console.log(new_message);
    //Handles null error 
    if (!new_message.message || !new_message.chatID || !new_message.userName) {
        res.send("Enter full data /n validation error for sending message");
    }
    else {
        Chatting.sendMessage(new_message, function (err, chat) {
            if (err)
                res.send(err);
            res.send(chat);
        });
    }
};

//code to get chatting by id
exports.getBy = function (req, res) {
    Chatting.getFeedbackById(req.params.feedbackId, function (err, feedback) {
        if (err)
            res.send(err);
        res.send(feedback);
    });
};


//code to remove chat
exports.remove = function (req, res) {
    Chatting.remove(req.params.ID, function (err, chat) {
        if (err)
            res.send(err);
        res.json('Deleted Successfully');
    });
};