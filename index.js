const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const sumBatteries = (previousValue, currentValue) => previousValue + currentValue;

const totalBatteries = batteryBatches.reduce(sumBatteries);