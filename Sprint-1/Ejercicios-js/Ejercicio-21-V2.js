function durationForHumans2(integer) {
  const TimeName = ["año", "dia", "hora", "minuto", "segundo"];
  const Seconds = [31536000, 86400, 3600, 60, 1];

  let IntegerModified = integer;
  let FormatHuman = "";

  if (!Number.isInteger(IntegerModified)) {
    return "No es un numero entero";
  }

  if (IntegerModified === 0) {
    return "Ahora";
  }
  for (let index = 0; index < Seconds.length; index++) {
    if (IntegerModified / Seconds[index] >= 1) {
      let Time = Math.floor(IntegerModified / Seconds[index]);
      Time == 1
        ? (FormatHuman += ` ${Time} ${TimeName[index]} `)
        : (FormatHuman += ` ${Time} ${TimeName[index]}s `);

      IntegerModified = IntegerModified - Time * Seconds[index];

      if (IntegerModified != 0) {
        IntegerModified % Seconds[index + 1] === 0
          ? (FormatHuman += " y ")
          : (FormatHuman += ", ");
      }
    }
  }
  return FormatHuman;
}
console.log(durationForHumans2(31536001232134169486982140));
