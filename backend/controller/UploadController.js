const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');
var stream = require('stream');

exports.upload = function (req, res) {
  const form = new IncomingForm();
  let location = "";
  form.on('file', (field, file) => {
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
    //console.log('file', file.originalFilename);
    var dirname = "D:/Kiran Bari/Training/ChattingApp/frontend/src/assets/Files";
    const readStream = fs.createReadStream(file.filepath);
    var writable = fs.createWriteStream(dirname + '/' + file.originalFilename);
    location = dirname + file.originalFilename;
    // console.log(readStream);
    readStream.pipe(writable);
  });
  form.on('end', () => {
    console.log(location);
    res.json({ body: location });
  });
  form.parse(req);
};
