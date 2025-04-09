function getGrade(score) {
  // Evaluar la calificacion
  if (score === 100) return "A++";
  else if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else if (score >= 0) return "F";
  // Fuera del rango
  else return "Invalid score";
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
