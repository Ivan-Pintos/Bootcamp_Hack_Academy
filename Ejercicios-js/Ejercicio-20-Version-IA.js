function play(str) {
  const options = {
    piedra: "tijera",
    papel: "piedra",
    tijera: "papel",
  };

  if (!options[str]) {
    return "El texto ingresado no es ninguno de los valores permitidos: papel, piedra o tijera";
  }

  const computerOption = Object.keys(options)[Math.floor(Math.random() * 3)];

  if (str === computerOption) {
    return `La computadora eligió ${computerOption}. Empataron.`;
  }

  const youWin = options[str] === computerOption;
  const result = youWin ? "Ganaste" : "Perdiste";

  return `La computadora eligió ${computerOption}. ${result}.`;
}
console.log(play("piedra"));
