let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http)
let port = process.env.PORT || 3000;

console.log('PORT: ', port)
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

// io.on('connection', function(socket){
//     socket.on('disconnect', function(){
//         console.log('user disconnected')
//     })
//     socket.on('chat message', function(msg){
//         console.log(msg)
//         io.emit('message: ', msg)
//     })
// })
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });
      

http.listen(port, function() {
    console.log('listening on: yah' + port)
})