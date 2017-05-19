const express = require('express');
const multer = require('multer');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const socketIO = require('socket.io');
const fs = require('fs');

fs.unlink('./img/ay.gif', (err) => {
  if (err) {
    return console.log("no file to delete");
  };
  console.log('successfully deleted ./img/ay.gif');
});

// Create the app with express
const app = express();

// Using http instead to create the server
var server = http.createServer(app);
var io = socketIO(server);

const path = require('path');
// app.use(morgan('combined'));
app.use(cors());
// app.use(bodyParser.json({ limit: '10mb', type: '*/*'}));
app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({limit: '500mb', extended: false}));

//serve our static files
const port = process.env.PORT || 8081;
app.use(express.static(__dirname + '/'));

// viewed at http://localhost:8081
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/Users/frameworkjs/Projects/mscsblog/img')
  }, 
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});
var upload = multer({ 
    storage: storage,
    limits: { 
      fileSize: 1000000000 
    }
});

app.post('/api/upload', upload.any(), function(req, res) {
    console.log('req.files is: ', req.files);
    console.log('req.body is: ', req.body);
    res.sendStatus(200);
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