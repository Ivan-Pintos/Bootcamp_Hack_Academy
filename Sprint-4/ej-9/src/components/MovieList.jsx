import Movie from "./Movie";
import Modal from "./Modal";
import { useState } from "react";
function MovieList({ movies }) {
  const [open, setOpen] = useState(false);
  const [movieModal, setMovieModal] = useState({});
  return (
    <div className="flex flex-wrap bg-black p-10 justify-center gap-4">
      {movies.length !== 0 ? (
        movies.map((movie) => {
          return (
            <Movie
              movie={movie}
              key={movie.id}
              openModal={setOpen}
              setMovieModal={setMovieModal}
            />
          );
        })
      ) : (
        <span className="text-white text-2xl">
          Lo sentimos, no se encontraron películas con el rating solicitado
        </span>
      )}
      <Modal open={open} setOpen={setOpen} movie={movieModal} />
    </div>
  );
}
export default MovieList;
