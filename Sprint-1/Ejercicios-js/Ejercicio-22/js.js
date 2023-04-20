const botones = document.querySelectorAll("button");
const audioElements = [
  new Audio("sounds/tom-1.mp3"),
  new Audio("sounds/tom-2.mp3"),
  new Audio("sounds/tom-3.mp3"),
  new Audio("sounds/tom-4.mp3"),
  new Audio("sounds/kick-bass.mp3"),
  new Audio("sounds/snare.mp3"),
  new Audio("sounds/crash.mp3"),
];
const teclas = ["a", "s", "d", "f", "j", "k", "l"];
botones.forEach((boton, index) => {
  boton.addEventListener("click", () => {
    audioElements[index].pause(),
      (audioElements[index].currentTime = 0),
      audioElements[index].play();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === teclas[index]) boton.click(); // audioElements[index].play();
  });
});
