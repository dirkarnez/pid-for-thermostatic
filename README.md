pid-for-thermostatic
====================
### Assumption
- This stupid PID code assumes my so call thermostatic system can heat up object instantly (e.g control the tracked parameter directly)
  - Normal PID controller controls something else to indirectly affect the parameter it tracks
    - e.g. control the output of the heater so that the tracked temperature is affected
    - e.g. control the angle of steering wheel of vehicle to affect the fact that whether it travel in a expected path
