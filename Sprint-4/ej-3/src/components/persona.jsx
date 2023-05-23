function personIsAnAdult(edad) {
  if (edad < 18) {
    return <p>Lo sentimos, no tiene edad legal para beber alcohol</p>;
  } else {
    return <p>Bienvenido. Lo invitamos a tomar una cerveza</p>;
  }
}

//Otra forma de resolver esto es escribierndo esto en donde se llama a la funcion

/* 
  {edad < 18 ? (
    <p>Lo sentimos, no tiene edad legal para beber alcohol</p>
  ) : (
    <p>Bienvenido. Lo invitamos a tomar una cerveza</p>
  )} 
*/
function Persona({ nombre, edad }) {
  return (
    <>
      <p>{nombre}</p>
      {personIsAnAdult(edad)}
    </>
  );
}
export default Persona;
