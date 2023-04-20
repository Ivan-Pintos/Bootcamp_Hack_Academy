function convert(number, string) {
  if (typeof number == "number" && (string == "mi" || string == "km")) {
    if (string == "mi") {
      return `${(number * 1.60934).toFixed(2)} km`;
    } else {
      return `${(number * 0.621371).toFixed(2)} mi`;
    }
  } else {
    return "Los valores enviados por parametro no cumplen con las condiciones";
  }
}

console.log(convert(100, "km"));
