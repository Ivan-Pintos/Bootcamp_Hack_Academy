function encrypt13(OriginalStr) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  //let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
  let NewStr = "";
  for (let char of OriginalStr) {
    let NewChar = "";
    if (alphabet.includes(char.toLowerCase())) {
      if (alphabet.indexOf(char.toLowerCase()) + 13 > alphabet.length - 1) {
        NewChar +=
          alphabet[alphabet.indexOf(char.toLowerCase()) + 13 - alphabet.length];
      } else {
        NewChar += alphabet[alphabet.indexOf(char.toLowerCase()) + 13];
      }
      char.toUpperCase() === char
        ? (NewStr += NewChar.toUpperCase())
        : (NewStr += NewChar);
    } else {
      NewStr += char;
    }
  }
  return NewStr;
}
console.log(encrypt13("HACK academy 2022"));
