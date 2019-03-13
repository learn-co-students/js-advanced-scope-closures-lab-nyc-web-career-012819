function produceDrivingRange(range)
{
  return function(string1, string2)
  {
    let difference = string2.slice(0,2) - string1.slice(0,2)
    return range > difference ? `within range by ${range - difference}` : `${difference - range} blocks out of range`
  }
}

function produceTipCalculator(tip)
{
  return function(bill){
    return bill * tip
  }
}

function createDriver()
{
  let driverId = 0
  return class Driver
  {
    constructor(name)
    {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
