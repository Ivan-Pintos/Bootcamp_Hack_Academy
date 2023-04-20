function countVowels(string) {
  if (typeof string != "string") {
    return "El valor ingresado no es un string";
  }
  let vowels = 0;
  for (let char of string) {
    if (
      char.toLowerCase() == "a" ||
      char.toLowerCase() == "e" ||
      char.toLowerCase() == "i" ||
      char.toLowerCase() == "o" ||
      char.toLowerCase() == "u"
    ) {
      vowels++;
    }
  }
  return vowels;
}
console.log(countVowels("Hola"));
