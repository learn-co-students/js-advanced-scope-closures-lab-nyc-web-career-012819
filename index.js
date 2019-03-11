function produceDrivingRange(blockRange){
  return function(start, end){
    start = Number(start.replace('th', ' '))
    end = Number(end.replace('th', ' '))
    if (end - start < blockRange){
      return `within range by ${end - start}`
    }else{
      return `${end - start - blockRange} blocks out of range`
    }
    // WHY IS THIS NOT WORKING?
    // (end - start < blockRange) ? `within range by ${end - start}` : `${end - start - blockRange} blocks out of range`
  }
}

function produceTipCalculator(fare){
  return (tip) => fare*tip
}

function createDriver(){
  let id = 0
  return class Driver{
    constructor(name){
      this.name = name
      this.id = ++id
    }
  }
}
