const BotonModal = document.querySelectorAll("button");
const ModalContainer = document.getElementById("modal");

BotonModal.forEach((boton) => {
  boton.addEventListener("click", () => {
    ModalContainer.classList.toggle("d-none");
    ModalContainer.classList.toggle("d-flex");
  });
});
