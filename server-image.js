module.exports = (app) => {
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

// Example for file delete
// fs.unlink('./img/creating.gif', (err) => {
//   if (err) {
//     return console.log("no file to delete");
//   };
//   console.log('successfully deleted ./img/ay.gif');
// });

// End image API
}