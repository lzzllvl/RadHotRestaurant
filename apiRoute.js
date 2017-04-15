var tableData = require();
var waitListData = require();

module.exports = function(app){

  app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });

  app.get("/api/reservations", function(req, res) {
    res.json(waitListData);
  });

  // ==================

  app.post("/api/tables", function(req, res){
    res.json(tableData);
  });

  app.post("/api/clear", () => {
    waitListData = [];
    tableData = [];
  });

};
