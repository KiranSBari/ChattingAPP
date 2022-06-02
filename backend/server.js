const express = require('express');
var path=require('path');
var app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const cors = require('cors');
app.use(cors());

var routes = require('./router/router'); //importing router
const res = require('express/lib/response');
routes(app); //register the router

app.listen(3115,function(err){
  if (err) 
  console.error("Error in server setup \n", err);
  console.log("🌍 Server is listening on port 3115");
});
process.on('uncaughtException', function(ex) { // for any exception from API should NOT stop the server 
  console.log("Getting error from API" +ex);
});
