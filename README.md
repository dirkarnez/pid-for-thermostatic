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
- [ ] Auto-tuning
  - [br3ttb/Arduino-PID-AutoTune-Library](https://github.com/br3ttb/Arduino-PID-AutoTune-Library)
