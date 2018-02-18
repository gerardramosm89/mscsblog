const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

// Create the app with express
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: false }));
// File Upload Routes
require('./server-file-upload')(app);

// Serve our static files
const port = process.env.PORT || 8081;
// app.use(express.static(__dirname + '/'));
const expressStaticGzip = require("express-static-gzip");
app.use(expressStaticGzip(__dirname + "/"));
// Image Routes
require('./server-image')(app);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
  
app.listen(port, function(){
    console.log(`Express server is up on port ${port}`);
});