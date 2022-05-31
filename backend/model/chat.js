'user strict';
var sql = require('../model/db');


//data access logic
var Chat = function (chat) {

    //initilization code
    this.username = chat.username;
    this.message = chat.message;
    this.date = chat.date;
};



//code to get all users

Chat.getAllchat = function (result) {
    sql.query("call get_chat_details()", function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(null, err);
            }
            else{
              console.log(' : ', res);  
              result(null, res[0]);
            }
        });   
};

// INSERT chat //
Chat.insertchat = function (newChat, result) {   
       sql.query("call insert_chat_details(?,?,?)", [newChat.username,newChat.message,
        newChat.date], 
         function (err, res) {
               if(err) {
                 console.log("error: ", err);   
                 result(err, null);
               }
               else{
                 console.log(res);
                 result(null,res);
               }
           });           
   };


module.exports = Chat;