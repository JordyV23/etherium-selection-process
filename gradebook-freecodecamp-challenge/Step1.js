function getAverage(scores) {
  // Sumar todos los valores
  let totalScores = scores.reduce((total, currentValue) => {
    return total + currentValue;
  }, 0);

  // Dividir la suma entre la cantidad
  return totalScores / scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
