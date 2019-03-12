function produceDrivingRange(bR){
  return function (sB, eB){
    let start = parseInt(sB)
    let end = parseInt(eB)
    let distance = Math.abs(end - start)
    let difference = bR - distance

    if (difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percent){
    return function (fare){
      return fare * percent
    }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
