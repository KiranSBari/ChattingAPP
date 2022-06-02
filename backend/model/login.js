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
    sql.query("call get_all_Login()", function (err, res) {
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

Login.login = function (req,res) {
  var customerEmail = req.body.username;
  var customerPassword = req.body.password;
  //var custID=req.body.custID;
   console.log(req.body.username);
  sql.query('CALL get_user(?,?)',[customerEmail,customerPassword], function (err, data,fields) {
      if(err) throw err;
      console.log(data);
      // var string=JSON.stringify(data);
      // var json = JSON.parse(string);
      console.log('>> count: ', data[0][0].flag);
      var status= data[0][0].flag;
         
          if(status==1){
         
              res.json(1);
              
          }else{
              res.json(0);
          }
      
  })
}

module.exports = Login;