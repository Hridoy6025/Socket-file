const express = require('express');
const app = express();
PORT = 3000;
const http = require('http');
const expressServer = http.createServer(app);

const {Server} = require('socket.io');
let io = new Server(expressServer)

app.get('/',function(req,res){
     res.sendFile(__dirname+"/index.html")
});


io.on('connection',function(socket){
    
  socket.on('chat',function(msg){
    io.emit('chat_transfer',msg)
  })


});





expressServer.listen(PORT,function(){
    console.log(`server is running at http://localhost:${PORT}`);
});