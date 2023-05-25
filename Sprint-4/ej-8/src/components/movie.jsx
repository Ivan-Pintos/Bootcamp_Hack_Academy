function scoreOfMovie(score) {
  if (score > 7) {
    return (
      <p className="bg-success text-center text-white p-2 m-0">Excelente</p>
    );
  }
  if (score < 5) {
    return <p className="bg-danger text-center text-white p-2 m-0">Muy mala</p>;
  }
  if (score >= 5) {
    return <p className="bg-warning text-center text-white p-2 m-0">Regular</p>;
  }
  if (score === 0) {
    return (
      <p className="bg-secondary text-center text-white p-2 m-0">
        No la ví aún
      </p>
    );
  }
}
// const imgStyle = { width: "300px", height: "100%", objectFit: "cover" };
function Movie({ title, year, image, score }) {
  return (
    <div>
      <p
        className="m-0 bg-black d-flex text-center justify-content-center align-items-center text-white p-2"
        style={{ height: "20%" }}
      >
        {title} ({year})
      </p>
      {scoreOfMovie(score)}
      <img
        src={`https://image.tmdb.org/t/p/original/${image}`}
        alt="Imagen de la pelicula"
        className="img-fluid "
        style={{ width: "300px", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}

export default Movie;
