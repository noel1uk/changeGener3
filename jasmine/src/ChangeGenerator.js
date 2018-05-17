class ChangeGenerator {
  constructor(moneyGiven, itemPrice) {
    this.changeAvailable = [2, 1];
    if ( moneyGiven || itemPrice !== undefined ) {
      this.moneyGiven = parseInt(moneyGiven.slice(0, -1));
      this.itemPrice = parseInt(itemPrice.slice(0, -1));
    }
    this.changeDue = this.moneyGiven - this.itemPrice;
    this.changePrepared = [0];
    this.changeRemaining = this.changeDue;
  }
  returnChange() {
    if ( this.changeDue === 0 ) {
      return this.changePrepared;
    } 

    let sumOfChangePrepared = this.changePrepared.reduce(function(accumulator, currentValue) {
       return accumulator + currentValue;
    });

    while ( sumOfChangePrepared < this.changeDue ) {
      if ( this.changePrepared[0] === 0 ) {
        this.changePrepared.shift();
      }
      
      for ( let i = 0, foundCoin = 0; foundCoin < 1; i++ ) {
        if ( this.changeAvailable[i] <= this.changeRemaining ) {
          this.changePrepared.push(this.changeAvailable[i]);
          this.changeRemaining -= this.changeAvailable[i];
          foundCoin = 1;
        }
      }
      // this.changeAvailable.forEach(denomination => {
      //   if (denomination <= this.changeRemaining ) {
      //     this.changePrepared.push(denomination);
      //     this.changeRemaining -= denomination;
      //   }
      // });
      sumOfChangePrepared = this.changePrepared.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
      });
    }

    return this.changePrepared;

  }
}