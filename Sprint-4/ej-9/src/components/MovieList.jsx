import Movie from "./Movie";
import Modal from "./Modal";
import { useState } from "react";
function MovieList({ movies, moviesRate }) {
  const [open, setOpen] = useState(false);
  const [movieModal, setMovieModal] = useState({});

  const filterMovies = movies.filter((movie) => {
    if (movie.vote_average >= moviesRate) {
      return movie;
    }
  });
  return (
    <div className="flex flex-wrap bg-black p-10 justify-center gap-4">
      {filterMovies.length !== 0
        ? filterMovies.map((movie) => {
            return (
              <Movie
                movie={movie}
                key={movie.id}
                openModal={setOpen}
                setMovieModal={setMovieModal}
              />
            );
          })
        : movies.length !== 0 && (
            <span
              className="text-white text-2xl "
              onClick={() => console.log(movies)}
            >
              Lo sentimos, no se encontraron películas con el rating solicitado
            </span>
          )}
      <Modal open={open} setOpen={setOpen} movie={movieModal} />
    </div>
  );
}
export default MovieList;
