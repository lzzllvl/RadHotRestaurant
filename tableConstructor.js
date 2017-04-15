function Table(reservationName, index) {
  if(this instanceof Table){
    this.reservationName = reservationName;
    if(index >= 5) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  } else {
    return new Table(reservationName, index);
  }
}

module.exports = Table;