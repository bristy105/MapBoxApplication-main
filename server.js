var express = require("express");
var app = express();

var multer = require("multer");
var cors = require("cors");
app.use(cors());

var storage = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, "");
  },
});

var upload = multer({ storage: storage }).any();

app.post("/upload", function (req, res) {
  upload(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    const data = String(req.files[0].buffer);
    return res.status(200).send(data);
  });
});

app.listen(8000, function () {
  console.log("App running on port 8000");
});
