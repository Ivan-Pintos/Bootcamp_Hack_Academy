import Header from "../components/header";
import MoviesData from "../data/data";
import MovieList from "../components/MovieList";
import { useState, useEffect } from "react";
import "./index.css";
function App() {
  const [movies, setMovies] = useState(MoviesData);
  const [moviesRate, setMoviesRate] = useState(0);

  useEffect(() => {
    const filterMovies = MoviesData.filter((movie) => {
      if (movie.vote_average >= moviesRate) {
        return movie;
      }
    });
    setMovies(filterMovies);
  }, [moviesRate]);

  function changeMoviesRate(rate) {
    if (rate >= 0 && rate < 11) {
      setMoviesRate(rate);
    }
  }
  return (
    <>
      <Header />
      <main className="container mx-auto xl:w-11/12">
        {/* Este div de abajo debe ser el componente del filter */}
        <div className="border  border-yellow-400 my-2 text-yellow-400 flex justify-center gap-3 p-1 bg-black">
          <span className="text-white font-thin">Filtrar por rating:</span>
          <div className=" flex gap-2">
            {moviesRate > 0 ? (
              <button className="" onClick={() => changeMoviesRate(2)}>
                <i className="bi bi-star-fill "></i>
              </button>
            ) : (
              <button className="" onClick={() => changeMoviesRate(2)}>
                <i className="bi bi-star"></i>
              </button>
            )}

            {moviesRate > 2 ? (
              <button className="" onClick={() => changeMoviesRate(4)}>
                <i className="bi bi-star-fill"></i>
              </button>
            ) : (
              <button className="" onClick={() => changeMoviesRate(4)}>
                <i className="bi bi-star"></i>
              </button>
            )}

            {moviesRate > 4 ? (
              <button className="" onClick={() => changeMoviesRate(6)}>
                <i className="bi bi-star-fill"></i>
              </button>
            ) : (
              <button className="" onClick={() => changeMoviesRate(6)}>
                <i className="bi bi-star"></i>
              </button>
            )}

            {moviesRate > 6 ? (
              <button className="" onClick={() => changeMoviesRate(8)}>
                <i className="bi bi-star-fill"></i>
              </button>
            ) : (
              <button className="" onClick={() => changeMoviesRate(8)}>
                <i className="bi bi-star"></i>
              </button>
            )}

            {moviesRate > 8 ? (
              <button className="" onClick={() => changeMoviesRate(10)}>
                <i className="bi bi-star-fill"></i>
              </button>
            ) : (
              <button className="" onClick={() => changeMoviesRate(10)}>
                <i className="bi bi-star"></i>
              </button>
            )}
          </div>
        </div>
        <MovieList movies={movies} />
      </main>
    </>
  );
}

export default App;
