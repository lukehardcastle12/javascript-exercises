//celc to fahr (celc * 9/5) + 32
const convertToCelsius = function(temperature) {
  return Math.round(((temperature - 32) * (5/9)) * 10) / 10;
};
// fahr to celc (fahr -32) * 5/9
const convertToFahrenheit = function(temperature) {
  
  return Math.round(((temperature * (9/5)) + 32)* 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
