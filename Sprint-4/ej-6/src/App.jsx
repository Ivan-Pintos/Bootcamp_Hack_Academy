import React from "react";
function App() {
  const [num_1, setNum_1] = React.useState("");
  const [num_2, setNum_2] = React.useState("");
  const [result, setResult] = React.useState("");
  return (
    <form
      action=""
      method="get"
      onSubmit={(event) => event.preventDefault()}
      className=" container d-flex flex-column gap-3"
    >
      <h1> Ingresar dos números para multiplicar</h1>
      <label htmlFor="num_1" className="form-label">
        Número 1
      </label>
      <input
        type="number"
        id="num_1"
        name="num_1"
        className="form-control"
        value={num_1}
        placeholder="0"
        onChange={(event) => setNum_1(event.target.value)}
      />
      <label htmlFor="num_2" className="form-label">
        Número 2
      </label>
      <input
        type="number"
        id="num_2"
        name="num_2"
        className="form-control"
        value={num_2}
        placeholder="0"
        onChange={(event) => setNum_2(event.target.value)}
      />
      <button
        type="submit"
        className="btn btn-success"
        style={{ width: "100px" }}
        onClick={() => setResult(num_1 * num_2)}
      >
        Multiplicar
      </button>
      <span>El resultado es: {result}</span>
    </form>
  );
}

export default App;
