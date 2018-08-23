const express = require("express");
const cors = require("cors");
const fs = require("fs");
const argv = require('minimist')(process.argv.slice(2));

const app = express();
const port = argv.p || argv.port || 4444;
app.use(cors());

app.get("*", function (req, res) {
  let code = parseInt(req.originalUrl.substr(1,4));
  let filename = "";

  if (isNaN(code)) {
    filename = "404.jpg";
  } else {
    filename = fs.readdirSync("./cats").find((f) => {
      return f.substr(0,3) == code;
    });
  }

  if (!filename) {
    filename = "404.jpg";
  }

  let stream = fs.createReadStream(`./cats/${filename}`);
  stream.on('open', function () {
      res.set('Content-Type', "image/jpg");
      stream.pipe(res);
  });
});

app.listen(port, () => {
  console.log(`Serving cats on port ${port}`);
});