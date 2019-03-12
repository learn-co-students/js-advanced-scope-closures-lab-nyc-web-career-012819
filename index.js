
const produceDrivingRange = function(blockRange) {
  return function(firstStreet, secondStreet) {
    diff = Math.abs(parseInt(firstStreet.split('t')[0]) - parseInt(secondStreet.split("t")[0]));
    if (diff <= blockRange) {
      return `within range by ${diff}`;
    }
    else {
      return `${Math.abs(diff - blockRange)} blocks out of range`
    }
  }
}

const produceTipCalculator = function(percentage){
  return function(fare) {
    return fare * percentage;
  }
}


const createDriver = function(){
  driverId = 0;
  return class {
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}
