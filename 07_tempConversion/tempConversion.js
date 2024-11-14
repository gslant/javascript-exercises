const convertToCelsius = function(numInF) {
  return Math.round(((numInF-32) * 5/9) * 10) / 10;
};

const convertToFahrenheit = function(numInC) {
  return Math.round((numInC * 9/5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
