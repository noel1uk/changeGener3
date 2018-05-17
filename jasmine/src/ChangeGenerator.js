class ChangeGenerator {
  constructor(moneyGiven, changeDue) {
    this.moneyGiven = moneyGiven;
    this.changeDue = changeDue;
  }
  returnChange() {
    return ( this.moneyGiven > this.changeDue ) ? [1] : []
  }
}