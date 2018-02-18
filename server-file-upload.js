const multer = require('multer');
const path = require('path');

module.exports = app => {
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
}