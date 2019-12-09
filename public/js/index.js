
let socket = io();
socket.on('connect', function(){
    console.log("Connected to server.");

});
socket.on('disconnect', function(){
    console.log("Disconnected to server.");
});

socket.on('newMessage', function(message){
    console.log("newMessage", message);
    let li = document.createElement('li');
    li.innerText = `${message.from} : ${message.text}`;
    document.querySelector('body').appendChild(li);
}, function(message){
    console.log("Do you Got it", message);
});


document.querySelector('#submit_bts').addEventListener("click", function(e){
    e.preventDefault();
    socket.emit('createMessage', {
        from : "User",
        text : document.querySelector('input[name="message"]').value
    }, function(){

    });
});
