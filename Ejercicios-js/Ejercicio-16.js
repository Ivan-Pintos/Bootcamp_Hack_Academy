function findOddNumber(Numbers) {
  for (const number of Numbers) {
    let count = 0;
    for (const number2 of Numbers) {
      if (number === number2) {
        count++;
      }
    }
    if (count % 2 != 0) {
      return number;
    }
  }
  return "No hay ningun numero impar en el array ingresado.";
}
console.log(
  findOddNumber([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])
);
