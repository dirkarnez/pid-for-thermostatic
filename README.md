pid-for-thermostatic
====================
### Based on
- [Water Cooling Calculator](https://www.omnicalculator.com/food/water-cooling)
### TODOs
- [ ] Should model heating process
  - This stupid PID code assumes my so call thermostatic system can heat up object instantly (e.g control the tracked parameter directly)
    - Normal PID controller controls something else to indirectly affect the parameter it tracks
      - e.g. Heater PID: control the output of the heater so that the tracked temperature is affected
      - e.g. Vehicle PID: control the angle of steering wheel of vehicle to affect the fact that whether it travel in a expected path
  - !!!![**Using Power in Heat Equations - IB Physics - YouTube**](https://www.youtube.com/watch?v=zPfkBzj1TQg)
- [ ] Auto-tuning
  - [br3ttb/Arduino-PID-AutoTune-Library](https://github.com/br3ttb/Arduino-PID-AutoTune-Library)
    - [arduino-pid-library-tester/pid-tester/pid-tester.ino at master · br3ttb/arduino-pid-library-tester](https://github.com/br3ttb/arduino-pid-library-tester/blob/master/pid-tester/pid-tester.ino)
- [ ] generic pid
- [ ] non-auto-tuning
  - [dirkarnez/nouislider-playground](https://github.com/dirkarnez/nouislider-playground)
     
### Tutorials
- [SS2867/SmartThermalCup: A smart thermal cup that uses the sensor to detect the temperature and use the heating module to heat the liquid in real time, thereby achieving long-term heat preservation. Project for Microcontroller Contest 2324](https://github.com/SS2867/SmartThermalCup)
