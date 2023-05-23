function scoreOfMovie(score) {
  if (score === "good") {
    return (
      <p className="bg-success text-center text-white p-2 m-0">Excelente</p>
    );
  } else if (score === "bad") {
    return <p className="bg-danger text-center text-white p-2 m-0">Muy mala</p>;
  } else if (score === "average") {
    return <p className="bg-warning text-center text-white p-2 m-0">Regular</p>;
  } else if (score === "notViewed") {
    return (
      <p className="bg-secondary text-center text-white p-2 m-0">
        No la ví aún
      </p>
    );
  }
}
// const imgStyle = { width: "300px", height: "100%", objectFit: "cover" };
function Movie({ title, year, image, score }) {
  console.log(title, year);
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
        src={`/${image}`}
        alt="Imagen de la pelicula"
        class="img-fluid "
        style={{ width: "300px", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}

export default Movie;
