const path = require('path');
const express = require('express');
const socketIo = require('socket.io');
const http = require("http");
const {generateMessage} = require('./utils/message');

const publicPath = path.join(__dirname, "./../public");
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIo(server);



io.on('connection', (socket) =>{
    console.log("A new user just connected.");

    //To new joined user
    socket.emit('newMessage', generateMessage("Admin", 'Welcome to the chat app.'));


    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User Joined'));
   

    socket.on('createMessage', (message, callback)=>{
        console.log("createMessage :",message);
        io.emit('newMessage',generateMessage(message.from, message.text));
        callback && callback('Yes');
    });
    
    socket.on('disconnect', () =>{
        console.log("The user just disconnected.");
    });

});


app.use(express.static(publicPath)); 

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});