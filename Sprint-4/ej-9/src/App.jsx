import Header from "../components/header";
import MoviesData from "../data/data";
import MovieList from "../components/MovieList";
import "./app.css";
import { useState, useEffect } from "react";

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
      <main className="container d-flex flex-column gap-4">
        <div className="d-flex justify-content-center gap-2 mt-4 align-items-center border border-warning bg-black">
          <span className="text-white">Filtrar por rating:</span>
          <div className="text-warning-stars">
            {moviesRate > 0 ? (
              <button className="btn-star" onClick={() => changeMoviesRate(2)}>
                <i className="bi bi-star-fill "></i>
              </button>
            ) : (
              <button className="btn-star" onClick={() => changeMoviesRate(2)}>
                <i className="bi bi-star"></i>
              </button>
            )}

            {moviesRate > 2 ? (
              <button className="btn-star" onClick={() => changeMoviesRate(4)}>
                <i className="bi bi-star-fill"></i>
              </button>
            ) : (
              <button className="btn-star" onClick={() => changeMoviesRate(4)}>
                <i className="bi bi-star"></i>
              </button>
            )}

            {moviesRate > 4 ? (
              <button className="btn-star" onClick={() => changeMoviesRate(6)}>
                <i className="bi bi-star-fill"></i>
              </button>
            ) : (
              <button className="btn-star" onClick={() => changeMoviesRate(6)}>
                <i className="bi bi-star"></i>
              </button>
            )}

            {moviesRate > 6 ? (
              <button className="btn-star" onClick={() => changeMoviesRate(8)}>
                <i className="bi bi-star-fill"></i>
              </button>
            ) : (
              <button className="btn-star" onClick={() => changeMoviesRate(8)}>
                <i className="bi bi-star"></i>
              </button>
            )}

            {moviesRate > 8 ? (
              <button className="btn-star" onClick={() => changeMoviesRate(10)}>
                <i className="bi bi-star-fill"></i>
              </button>
            ) : (
              <button className="btn-star" onClick={() => changeMoviesRate(10)}>
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
