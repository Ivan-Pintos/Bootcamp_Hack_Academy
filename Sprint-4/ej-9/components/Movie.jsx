function Movie({ movie }) {
  return (
    <img
      src={movie.poster_path}
      alt={`Imagen de la pelicula: ${movie.original_title}`}
      className="d-flex img-fluid"
      style={{ width: "200px" }}
    />
  );
}
export default Movie;
