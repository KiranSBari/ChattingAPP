'user strict';
var sql = require('../model/db');


//data access logic
var Login = function (login) {

    //initilization code
    this.username = login.username;
    this.password = login.password;
};



//code to get all users

Login.getAlluser = function (result) {
    sql.query("call get_user()", function (err, res) {
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



module.exports = Login;