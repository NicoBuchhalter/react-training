const multiplier = {
  numbers: [2,4,6,7,10],
  multiplyBy: 10,
  multiply() {
    return this.numbers.map( (number) => number * this.multiplyBy);
  }

};

console.log(multiplier.multiply());