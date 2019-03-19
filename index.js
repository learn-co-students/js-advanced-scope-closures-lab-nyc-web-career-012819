const produceDrivingRange = function (inRange) {
  return function (startLocation, endLocation) {
    let start = parseInt(startLocation);
    let end = parseInt(endLocation);
    let distance = Math.abs(end - start);
    let difference = inRange - distance;

    if (difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    };
  };
};

const produceTipCalculator = function (tipPercentage) {
  return function (fare) {
    return fare * tipPercentage;
  };
};

const createDriver = function() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    };
  };
};
