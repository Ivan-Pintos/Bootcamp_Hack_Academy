import Movie from "./Movie";
// import Modal from "./Modal";
// import { useState } from "react";
import SInfinite from "./ScrollInfinite";

function MovieList({ movies, moviesRate, setMovies }) {
  // const [open, setOpen] = useState(false);
  // const [movieModal, setMovieModal] = useState({});

  const filterMovies = movies.filter((movie, index, self) => {
    return index === self.findIndex((m) => m.id === movie.id);
  });

  return (
    <div className="bg-black flex flex-col justify-center p-2">
      <h1 className="text-gray-200 text-center text-4xl pb-4">Peliculas</h1>
      <div className="flex flex-wrap gap-1 justify-center border-t pt-4 border-yellow-500">
        {filterMovies.length !== 0
          ? filterMovies.map((movie) => {
              return (
                <Movie
                  movie={movie}
                  key={movie.id}
                  // openModal={setOpen}
                  // setMovieModal={setMovieModal}
                />
              );
            })
          : movies.length !== 0 && (
              <span
                className="text-white text-2xl "
                onClick={() => console.log(movies)}
              >
                Lo sentimos, no se encontraron películas con el rating
                solicitado
              </span>
            )}
        {/* <Modal open={open} setOpen={setOpen} movie={movieModal} /> */}
      </div>
      <SInfinite
        movies={movies}
        moviesRate={moviesRate}
        setMovies={setMovies}
      />
    </div>
  );
}
export default MovieList;
