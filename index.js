const express = require('express');

const app = express();
const PORT = 8080;

app.get("/:page?", function(req, res) {
    switch(req.params.page){
      case "make":
        console.log(`Request for ${req.params.page}`);
        res.sendFile('reservations.html', {root: __dirname});
        break;
      case "list":
        console.log(`Request for ${req.params.page}`);
        res.sendFile('tables.html', {root: __dirname});
        break;
      default:
        res.sendFile('index.html', {root: __dirname});
    }
});

app.get("/api/:path?", function(req, res) {
  console.log(`API Path ${req.params.path || "Main"} Requested`);
  res.end();
});

app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});