function ln(x) {
  // Math.log is actually ln, but i write the full equation here
  // Math.log(Math.E) is actually 1
  return Math.log(x) / Math.log(Math.E);
}
// [Water Cooling Calculator](https://www.omnicalculator.com/food/water-cooling#the-physics-of-a-piping-hot-cup-of-tea)
function calculate() {
  return -(ln((targetTemperature-ambientTemperature) / (initialTemperature - ambientTemperature)) / 0.00087381);
}
