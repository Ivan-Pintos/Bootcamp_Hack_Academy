function sumMultiples(integer) {
  if (typeof integer == "number") {
    let Values = [];
    let index = 1;
    let SumValues = 0;
    while (index < integer) {
      if (index % 3 === 0 || index % 5 === 0) {
        Values.push(index);
      }
      index++;
    }
    for (const num of Values) SumValues += num;

    return SumValues;
  } else {
    return "El valor ingresado no es un numero";
  }
}

function sumMultiples2(integer) {
  if (typeof integer == "number") {
    let SumValues = 0;
    for (let index = 0; index < integer; index++) {
      if (index % 3 === 0 || index % 5 === 0) SumValues += index;
    }
    return SumValues;
  } else {
    return "El valor ingresado no es un numero";
  }
}
console.log(sumMultiples2(31));
