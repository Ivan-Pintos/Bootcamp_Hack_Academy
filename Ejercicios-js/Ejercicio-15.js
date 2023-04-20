function sumMultiples(integer) {
  if (typeof integer == "number") {
    let SumValues = 0;
    let MultiplesOf = true;
    let index = 1;

    while (MultiplesOf) {
      if (index * 3 < integer) {
        SumValues += index * 3;
      } else {
        MultiplesOf = false;
      }
      index++;
    }

    MultiplesOf = true;
    index = 1;

    while (MultiplesOf) {
      if (index * 5 < integer) {
        SumValues += index * 5;
      } else {
        MultiplesOf = false;
      }
      index++;
    }

    return SumValues;
  } else {
    return "El valor ingresado no es un numero";
  }
}
console.log(sumMultiples(10));
