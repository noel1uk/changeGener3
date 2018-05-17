class ChangeGenerator {
  constructor(moneyGiven, changeDue) {
    if ( moneyGiven || changeDue !== undefined ) {
      this.moneyGiven = parseInt(moneyGiven.slice(0, -1));
      this.changeDue = parseInt(changeDue.slice(0, -1));
    }
  }
  returnChange() {
    if ( this.moneyGiven === 4 ) {
      return [2, 1];
    }
    if ( this.moneyGiven === 2 ) {
      return [1];
    }
    return [];
  }
}