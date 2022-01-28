import multer from "multer";

// storing file at api side
console.log("in file upload function")
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './uploads');
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
      // console.log(file)
    }
  });
  var upload = multer({ storage: storage }).any();
  export default upload