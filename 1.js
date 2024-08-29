let initialWaterVolume = prompt("What is the initial water volume in liters?");
initialWaterVolume = Number(initialWaterVolume);

if (isNaN(initialWaterVolume) || initialWaterVolume <= 0) {
  console.log("Impossible to calculate");
} else {
  console.log("Thanks");

  let days = 0;

  while (initialWaterVolume >= 10) {
    initialWaterVolume *= 0.9;
    days++;
  }

  console.log(
    `The water will last for ${days} days before it falls below 10 liters.`
  );
}
