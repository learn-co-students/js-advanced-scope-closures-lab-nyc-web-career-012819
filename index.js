function produceDrivingRange(blockRange) {
  return function(min, max) {
    min = parseInt(min.slice(0, -2))
    max = parseInt(max.slice(0, -2))
    difference = max - min
    return (difference <= blockRange) ? `within range by ${blockRange - difference}` : `${difference - blockRange} blocks out of range`
  }
}

function produceTipCalculator(tipPercentage) {
  return function(subtotal) {
    return subtotal * tipPercentage
  }
}

function createDriver() {
  let driverId = 0

  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}