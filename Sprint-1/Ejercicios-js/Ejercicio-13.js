function removeVowels(string) {
  if (typeof string != "string") {
    return "El texto enviado por parametro no es un string";
  }
  let StringWithoutVowels = "";
  for (let char of string) {
    if (
      char.toLowerCase() != "a" &&
      char.toLowerCase() != "e" &&
      char.toLowerCase() != "i" &&
      char.toLowerCase() != "o" &&
      char.toLowerCase() != "u"
    )
      StringWithoutVowels += char;
  }
  return StringWithoutVowels;
}
console.log(removeVowels("Hola URUGUAY"));
