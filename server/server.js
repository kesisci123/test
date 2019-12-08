const path = require('path');
const express = require('express');
const socketIo = require('socket.io');
const http = require("http");

const publicPath = path.join(__dirname, "./../public");
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIo(server);



io.on('connection', (socket) =>{
    console.log("A new user just connected.");

    socket.on('disconnect', () =>{
        console.log("The user just disconnected.");
    });

});


app.use(express.static(publicPath)); 

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});