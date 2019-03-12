function produceDrivingRange(range) {
  return function (block1, block2) {
    const diff = block2.slice(0,2) - block1.slice(0,2)
    let ans = diff > range ? `${diff - range} blocks out of range` : `within range by ${range - diff}`
    return ans
  }
}

function produceTipCalculator(dectip) {
  return function (total) {
    return total * dectip
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
