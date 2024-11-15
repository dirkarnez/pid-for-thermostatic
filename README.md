pid-for-thermostatic
====================
### Assumption
- This stupid PID code assumes my so call thermostatic system can heat up object instantly
  - Normal PID controller controls something else to affect the parameter it tracks
    - e.g. control the output of the heater so that the tracked temperature is affected
    - e.g. control the angle of steering wheel of vehicle to affect the tracked path it traveled
