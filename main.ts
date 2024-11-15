function ln(x) {
  // Math.log is actually ln, but i write the full equation here
  // Math.log(Math.E) is actually 1
  return Math.log(x) / Math.log(Math.E);
}
// [Water Cooling Calculator](https://www.omnicalculator.com/food/water-cooling#the-physics-of-a-piping-hot-cup-of-tea)
function calculate(targetTemperature: number, ambientTemperature: number, initialTemperature: number) {
  return -(ln((targetTemperature-ambientTemperature) / (initialTemperature - ambientTemperature)) / 0.00087381);
}


function plot(secondsElapsed: number, targetTemperature: number, ambientTemperature: number, initialTemperature: number) {
  return Math.exp(-(secondsElapsed * 0.00087381)) * (initialTemperature - ambientTemperature) + ambientTemperature
}
