const express = require('express');
const multer = require('multer');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const socketIO = require('socket.io');
// Example for file delete
// fs.unlink('./img/creating.gif', (err) => {
//   if (err) {
//     return console.log("no file to delete");
//   };
//   console.log('successfully deleted ./img/ay.gif');
// });

// Create the app with express
const app = express();

// Using http instead to create the server
var server = http.createServer(app);
var io = socketIO(server);

const path = require('path');
app.use(cors());
// app.use(bodyParser.json({ limit: '10mb', type: '*/*'}));
app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({limit: '500mb', extended: false}));

//serve our static files
const port = process.env.PORT || 8081;
app.use(express.static(__dirname + '/'));



// ------>>>> Get Images from server <<<<<<<<-----
// Grab images
app.get('/images', function(req, res) {
    const imgFolder = __dirname + '/img/';
    const fs = require('fs');
    fs.readdir(imgFolder, function(err, files) {
        if (err) {
            return console.log(err);
        }
        // Create empty array
        const filesArr = [];
        var i = 1;
        files.forEach(function(file) {
            filesArr.push( { name: file });
            i++
        });
        res.json(filesArr);
    })
});
// Delete images
app.post('/images/:name', function(req, res) {
    fs.unlink(`./img/${req.params.name}`, (err) => {
    if (err) {
        res.send({ message: `failed to delete ${req.params.name}`})
        return console.log("no file to delete");
    };
    console.log(`successfully deleted ${req.params.name}`);
    res.send({ message: `successfully deleted ${req.params.name}`})
    });
});
// End image API




// viewed at http://localhost:8081
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'img'));
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
  
server.listen(port, function(){
    console.log(`Express server is up on port ${port}`);
});