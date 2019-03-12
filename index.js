function produceDrivingRange(num) {
  return function(str1, str2) {
    let first = parseInt(str1);
    let last = parseInt(str2);
    let blockDiff = Math.abs(last - first);
    let finalDiff = num - blockDiff;

    if (finalDiff > 0) {
      return `within range by ${finalDiff}`;
    } else {
      return `${Math.abs(finalDiff)} blocks out of range`;
    }
  }
}

function produceTipCalculator(num) {
  return function(amount) {
    return amount * num;
  }
}

function createDriver() {
  let driverId = 1;

  return class {
    constructor(name) {
      this.name = name;
      this.id = driverId++;
    }
  }
}
