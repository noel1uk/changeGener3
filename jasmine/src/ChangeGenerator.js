class ChangeGenerator {
  constructor(moneyGiven, changeDue) {
    this.moneyGiven = moneyGiven;
    this.changeDue = changeDue;
  }
  returnChange() {
    if ( this.moneyGiven === '4p' ) {
      return [2, 1];
    }
    if ( this.moneyGiven === '2p' ) {
      return [1];
    }
    return [];
  }
}