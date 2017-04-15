var tableData = require(); //needs array exported
var waitListData = require(); // array export

module.exports = function(app){

  app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });

  app.get("/api/reservations", function(req, res) {
    res.json(waitListData);
  });

  // ==================

  app.post("/api/tables", function(req, res){
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  app.post("/api/clear", () => {
    waitListData = [];
    tableData = [];
  });

};
