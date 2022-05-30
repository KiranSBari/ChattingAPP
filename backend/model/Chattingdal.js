'user strict';
var sql = require('./db');

var date_obj = new Date();

let date = ("0" + date_obj.getDate()).slice(-2); // current date
let month = ("0" + (date_obj.getMonth() + 1)).slice(-2);// current month
let year = date_obj.getFullYear(); // current year

var _date = (year + "-" + month + "-" + date);

//data access logic
var Chatting = function (chatting) {

    //initilization code
    this.chatID = chatting.custID;
    this.message = chatting.message;
    this.userName = chatting.userName;
    this.chat_date = _date;


};


Chatting.sendMessage = function (new_message, result) {
    console.log(_date);
    sql.query("CALL insert_message(?,?, ?, ?)", [new_message.chatID, new_message.message, new_message.userName, _date], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res);
            result(null, res);
        }
    });
};


// //code to get feedback by id
// Feedback.getFeedbackById = function (feedbackId, result) {
//   console.log("in get by id function");
//   sql.query("call get_feedbackbyid(?)", feedbackId, function (err, res) {             
//           if(err) {
//             console.log("error: ", err);
//             result(err, null);
//           }
//           else{
//             result(null, res);     
//           }
//       });   
// };

//code to get all feedback
Chatting.getAllChat = function (result) {
    sql.query("call get_all_messages()", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('messages : ', res);   // just to print res value on console 
            result(null, res);
        }
    });
};


//code to get count of feedback
Chatting.summary = function (result) {
    sql.query("call feedback_summary();", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            // console.log('feedback : ', res);   // just to print res value on console 
            result(null, res);
        }
    });
};

//code to remove feedback
Chatting.remove = function (id, result) {
    sql.query("call delete_message_by_ID(?)", id, function (err, res) {
        if (!err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Chatting;