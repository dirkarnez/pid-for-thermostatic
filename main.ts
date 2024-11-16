function log(y: number) {
  // Math.log is ln, so i must precisely set base 10 to make it work as intended log
  return Math.log(y) / Math.LN10; // or Math.log(10)
}

function ln(x: number) {
  // Math.log is actually ln, but i write the full equation here
  // Math.log(Math.E) is actually 1
  return log(x) / log(Math.E);
}

// [Water Cooling Calculator](https://www.omnicalculator.com/food/water-cooling#the-physics-of-a-piping-hot-cup-of-tea)
function calculate(targetTemperature: number, ambientTemperature: number, initialTemperature: number) {
  return -(ln((targetTemperature-ambientTemperature) / (initialTemperature - ambientTemperature)) / 0.00087381);
}

// [Desmos | Graphing Calculator](https://www.desmos.com/calculator)
// y\ =\ \exp\left(-\left(x\ \cdot\ 0.00087381\right)\right)\ \cdot\ \left(90\ -\ 20\right)\ +\ 20
function plot(secondsElapsed: number, ambientTemperature: number, initialTemperature: number) {
  return Math.exp(-(secondsElapsed * 0.00087381)) * (initialTemperature - ambientTemperature) + ambientTemperature
}


/*
YES! multiply error is correct. the name "error" is confusing.
We are not making a bigger mistake, but try to make big moves to see if the PID are approach to target.
As can see error is calculated as target minus currentValue, not reversely,
if currentValue less than target, we get positive error value, we multiply this positive error value to
get next mesaurement of currentValue no more less than target, vice versa.
However, error is a corect name because it is indeed an error (currentValue not equal target is indeed error)
*/
function PController(currentValue: number, target: number) {
  const error = target - currentValue;
  // console.log(`currentValue ${currentValue} target ${target} error ${error}`);
  return 1.2 * error;
}

/*
dt is seconds, since this code uses seconds as time unit, i skip dt here
*/
var errorSum = 0;
function IController(currentValue: number, target: number) {
  const error = target - currentValue;
  const dt = 1; // 1 seconds
  errorSum += error * dt;
  // console.log(`currentValue ${currentValue} target ${target} error ${error}`);
  return 0.5 * errorSum;
}

var previousError = 0;
function DController(currentValue: number, target: number) {
  const error = target - currentValue;
  const dt = 1; // 1 seconds
  const errorRate = (error - previousError) / dt;
  previousError = error;
  // console.log(`currentValue ${currentValue} target ${target} error ${error}`);
  return 0.5 * errorRate;
}


function main() {
  let initialTemperature = 90;
  let currentTemp = initialTemperature;
  for (var t = 0; t < 100; t += 10) {
    // -(ln((85-20) / (90 - 20)) / 0.00087381)
    currentTemp = plot(t, 20, currentTemp);
    currentTemp += (PController(currentTemp, 90) + IController(currentTemp, 90) + DController(currentTemp, 90));
    console.log(`currentTemp = ${currentTemp} original ${plot(t, 20, initialTemperature)}`);
  }
}

main();
