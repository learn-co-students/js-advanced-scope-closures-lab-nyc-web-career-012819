// const produceDrivingRange = function(blockRange) {
//
// }
function produceDrivingRange(blockRange) {
  return function eightBlockRange(start, end) {
    let distance = Math.abs(parseInt(end) - parseInt(start));
    let difference = blockRange - distance;

    if (difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(amount) {
  return function(percentage) {
    return amount * percentage
  }
}

function createDriver() {
  let id = 1;
  return class {
    constructor(name) {
      this.name = name
      this.id = id
      id++
    }
  }
}
