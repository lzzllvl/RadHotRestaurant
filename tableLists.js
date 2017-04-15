const fs = require('fs');
const Table = require('./tableConstructor.js');

module.exports = {
  getTables: function() {
    var data = fs.readFileSync('tables.json', 'utf-8');
    let arr = JSON.parse(data);
    arr = arr.map((val, index) => {
      return new Table(val.reservationName, index);
    });
    return arr;
  },
  addReservation: function(name) {
      let tables = this.getTables();
      let table = Table(name, tables.length);
      tables.push(table);
      fs.writeFileSync('tables.json', JSON.stringify(tables, null, 2));
  },
  removeReservation: function(name) {
    let tables = this.getTables();
    if(tables.length > 0) {
      let removed = tables.filter(val => {
        return val.reservationName == name;
      });
      removed.length
          ? tables.splice(tables.indexOf(removed[0]), 1)
          : NULL;
      fs.writeFileSync('tables.json', JSON.stringify(tables, null, 2));
    } else {
      console.log("Error: No Current Table Reservations");
    }
  },

}