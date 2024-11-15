function ln(x) {
  // Math.log is actually ln, but i write the full equation here
  // Math.log(Math.E) is actually 1
  return Math.log(x) / Math.log(Math.E);
}
// [Water Cooling Calculator](https://www.omnicalculator.com/food/water-cooling#the-physics-of-a-piping-hot-cup-of-tea)
function calculate(targetTemperature: number, ambientTemperature: number, initialTemperature: number) {
  return -(ln((targetTemperature-ambientTemperature) / (initialTemperature - ambientTemperature)) / 0.00087381);
}

// [Desmos | Graphing Calculator](https://www.desmos.com/calculator)
// y\ =\ \exp\left(-\left(x\ \cdot\ 0.00087381\right)\right)\ \cdot\ \left(90\ -\ 20\right)\ +\ 20
function plot(secondsElapsed: number, targetTemperature: number, ambientTemperature: number, initialTemperature: number) {
  return Math.exp(-(secondsElapsed * 0.00087381)) * (initialTemperature - ambientTemperature) + ambientTemperature
}
