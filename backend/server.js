const express = require('express');
var path=require('path');
const http = require('http');
var app = express();

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

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

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

process.on('uncaughtException', function(ex) { // for any exception from API should NOT stop the server 
  console.log("Getting error from API" +ex);
});
