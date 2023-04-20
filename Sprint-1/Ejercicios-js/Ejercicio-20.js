// Re-hacer este codigo
function play(str) {
  const decisions = ["piedra", "tijera", "papel"];

  if (decisions.includes(str)) {
    let RandomNumber = Math.floor(Math.random() * 3);
    let resultado = "";
    if (str === decisions[RandomNumber]) {
      resultado = "Empataron";
    } else if (str === decisions[0]) {
      if (decisions[RandomNumber] === decisions[2]) {
        resultado = "Perdiste";
      } else {
        resultado = "Ganaste";
      }
    } else if (str === decisions[1]) {
      if (decisions[RandomNumber] === decisions[0]) {
        resultado = "Perdiste";
      } else {
        resultado = "Ganaste";
      }
    } else if (str === decisions[2]) {
      if (decisions[RandomNumber] === decisions[1]) {
        resultado = "Perdiste";
      } else {
        resultado = "Ganaste";
      }
    }
    return `La computadora eligió ${decisions[RandomNumber]} . ${resultado}.`;
  } else {
    return `El texto ingrsado no es ninguno de los valores permitidos: papel, piedra o tijera`;
  }
}
console.log(play("tijera"));
