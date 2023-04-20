function durationForHumans(integer) {
  // Modificar el codigo para que utilice un for y los dos arrays de abajo
  const TimeName = ["año", "dia", "hora", "minuto", "segundo"];
  const Seconds = [31536000, 86400, 3600, 60, 1];
  let IntegerModified = integer;
  let FormatHuman = "";

  if (!Number.isInteger(integer)) {
    return "No es un numero entero";
  }

  if (IntegerModified === 0) {
    return "Ahora";
  }
  if (IntegerModified / 31536000 >= 1) {
    if (Math.floor(IntegerModified / 31536000) == 1) {
      FormatHuman += `${Math.floor(IntegerModified / 31536000)} año`;
    } else {
      FormatHuman += `${Math.floor(IntegerModified / 31536000)} años`;
    }
    IntegerModified =
      IntegerModified - Math.floor(IntegerModified / 31536000) * 31536000;
    if (IntegerModified != 0) {
      if (IntegerModified % 86400 === 0) {
        FormatHuman += " y ";
      } else {
        FormatHuman += ", ";
      }
    }
  }
  if (IntegerModified / 86400 >= 1) {
    if (Math.floor(IntegerModified / 86400) == 1) {
      FormatHuman += `${Math.floor(IntegerModified / 86400)} dia`;
    } else {
      FormatHuman += `${Math.floor(IntegerModified / 86400)} dias`;
    }
    IntegerModified =
      IntegerModified - Math.floor(IntegerModified / 86400) * 86400;
    if (IntegerModified != 0) {
      if (IntegerModified % 3600 === 0) {
        FormatHuman += " y ";
      } else {
        FormatHuman += ", ";
      }
    }
  }
  if (IntegerModified / 3600 >= 1) {
    if (Math.floor(IntegerModified / 3600) == 1) {
      FormatHuman += `${Math.floor(IntegerModified / 3600)} hora`;
    } else {
      FormatHuman += `${Math.floor(IntegerModified / 3600)} horas`;
    }
    IntegerModified =
      IntegerModified - Math.floor(IntegerModified / 3600) * 3600;
    if (IntegerModified != 0) {
      if (IntegerModified % 60 === 0) {
        FormatHuman += " y ";
      } else {
        FormatHuman += ", ";
      }
    }
  }
  if (IntegerModified / 60 >= 1) {
    Math.floor(IntegerModified / 60) == 1
      ? (FormatHuman += `${Math.floor(IntegerModified / 60)} minuto`)
      : (FormatHuman += `${Math.floor(IntegerModified / 60)} minutos`);
    IntegerModified = IntegerModified - Math.floor(IntegerModified / 60) * 60;
    if (IntegerModified != 0) {
      if (IntegerModified % 1 === 0) {
        FormatHuman += " y ";
      } else {
        FormatHuman += ", ";
      }
    }
  }
  if (IntegerModified / 1 >= 1) {
    if (Math.floor(IntegerModified / 1) == 1) {
      FormatHuman += `${Math.floor(IntegerModified / 1)} segundo`;
    } else {
      FormatHuman += `${Math.floor(IntegerModified / 1)} segundos`;
    }
    IntegerModified = IntegerModified - Math.floor(IntegerModified / 1) * 1;
  }
  return FormatHuman;
}
console.log(durationForHumans(62));
