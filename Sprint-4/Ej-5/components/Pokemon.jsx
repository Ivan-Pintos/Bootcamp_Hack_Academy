function Pokemons({ pokemonList }) {
  return (
    <div className="d-flex flex-wrap gap-5 justify-content-center p-5">
      {pokemonList.map((pokemon) => (
        <div
          className="d-flex flex-column justify-content-center align-items-center gap-2 p-3 rounded"
          style={{ backgroundColor: "#bec0c2", minWidth: "150px" }}
          key={pokemon.id}
        >
          <span className="text-primary fw-bold">{pokemon.name}</span>
          <img
            src={pokemon.image}
            alt={`Imagen del pokemon ${pokemon.name}`}
            srcSet=""
            className="img-fluid"
            style={{ width: "120px" }}
          />
          <span className="fw-bold">{`Type: ${pokemon.type}`}</span>
        </div>
      ))}
    </div>
  );
}

export default Pokemons;
