function produceDrivingRange(blockRange){
  return function(strOne, strTwo){
    let diff = strTwo.slice(0,2) - strOne.slice(0,2);
    return blockRange > diff ? `within range by ${blockRange - diff}`:`${diff - blockRange} blocks out of range`
  }
}

function produceTipCalculator(percentage){
  return function(fare){
    return fare * percentage;
  }
}

function createDriver(){
  let driverId = 0
  return class Driver {
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}
