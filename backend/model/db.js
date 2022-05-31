// database connectivity
var mysql= require('mysql');

//define connection configuration 

var connection=mysql.createConnection({
    host:'192.168.6.204',
    user:'mydatabase',
    'Connection Timeout':'15',
    Protocol:'socket',
    password:'nopass',
    port: 3366,
    multipleStatements:true,
    database:'localchatting'


});
// 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
connection.connect(function(err){
    if(err) 
    {
        
        console.log("There is error to connect to DB \n"+ err)
         //throw err;
    }

});
module.exports=connection;