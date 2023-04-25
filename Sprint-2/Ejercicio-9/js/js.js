const MultiplyButton = document.querySelector("#multiply_button");
const numero1 = document.querySelector("#num1");
const numero2 = document.querySelector("#num2");
const form = document.querySelector("form");
const ResponseContainer = document.querySelector("#response-container");

form.addEventListener("submit", (event) => event.preventDefault());
MultiplyButton.addEventListener("click", () => {
  const data = {
    num1: numero1.value,
    num2: numero2.value,
  };

  fetch("/multiplicar", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.text())
    .then((responseText) => (ResponseContainer.innerHTML = `${responseText}`))
    .catch((error) => console.log(error));
});
