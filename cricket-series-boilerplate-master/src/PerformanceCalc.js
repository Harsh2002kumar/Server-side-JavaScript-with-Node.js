const PerformanceCalculator = (runs, balls) => {
  // Write the Logic here
  let average = runs / balls;
  if (runs > 30 && balls < 15) {
    average = average + average * 0.01;
  }
  if (runs > 50 && balls < 25) {
    average = average + average * 0.1;
  }
  if (runs > 100 && balls < 50) {
    average = average + average * 0.2;
  }

  return average;
};

module.exports = { PerformanceCalculator };
