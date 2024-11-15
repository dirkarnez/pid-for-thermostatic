function ln(x) {
  // Math.log is actually ln, but i write the full equation here
  // Math.log(Math.E) is actually 1
  return Math.log(x) / Math.log(Math.E);
}

function calculate() {
  return -(ln((21-20) / (90 - 20)) / 0.00087381);
}
