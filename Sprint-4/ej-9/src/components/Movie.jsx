import { Link } from "react-router-dom";
function Movie({ movie /*openModal, setMovieModal*/ }) {
  return (
    <div className="border border-yellow-400  ">
      <Link to={`/pelicula/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={`Imagen de la pelicula: ${movie.original_title}`}
          className=" w-30 h-40 md:h-60 md:w-40 hover:cursor-pointer"
        />
      </Link>

      <span className=" text-white flex item-center justify-center gap-2 text-xs md:text-lg">
        {`Rating ${movie.vote_average}`}
        <i className="bi bi-star-fill text-yellow-400"></i>
      </span>
    </div>
  );
}
export default Movie;
