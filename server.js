const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const socketIO = require('socket.io');
// Create the app with express
const app = express();

// Using http instead to create the server
var server = http.createServer(app);
var io = socketIO(server);

const path = require('path');
// app.use(morgan('combined'));
//app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));
//serve our static files
const port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/'));

// viewed at http://localhost:8081
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


io.on('connection', (socket) => {
    console.log(`New user connected`);
    
    socket.on('disconnect', () => {
        console.log("User disconnected");
    });

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to Gerry\'s MERN Chat App!'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User Joined!'));

    socket.on('createMessage', (newMessage, callback) => {
        console.log('newEmail is: ', newMessage);
        io.emit('newMessage', generateMessage(newMessage.from, newMessage.text));
        callback('this is from the server');
        // socket.broadcast.emit('newMessage', {
        //     from: newMessage.from,
        //     text: newMessage.text,
        //     createdAt: new Date().getTime()
        // });
    });
});


server.listen(port, function(){
    console.log(`Express server is up on port ${port}`);
});