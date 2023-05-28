import MoviesData from "../data/data";
import Header from "../components/header";
import MovieList from "../components/MovieList";

import { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";

import "./index.css";

function App() {
  const [movies, setMovies] = useState(MoviesData);
  const [moviesRate, setMoviesRate] = useState(0);

  function handleMoviesRate(rate) {
    rate = rate * 2;
    console.log(rate);
    if (rate >= 0 && rate < 11) {
      setMoviesRate(rate);
    }
  }

  useEffect(() => {
    const filterMovies = MoviesData.filter((movie) => {
      if (movie.vote_average >= moviesRate) {
        return movie;
      }
    });
    setMovies(filterMovies);
  }, [moviesRate]);

  return (
    <>
      <Header />
      <main className="container mx-auto xl:w-11/12">
        <div className="flex justify-center items-center gap-3 my-2 p-1 border border-yellow-400 text-yellow-400 bg-black">
          <span className="text-white font-thin">Filtrar por rating:</span>
          <Rating
            onClick={handleMoviesRate}
            size="25"
            SVGstyle={{ display: "inline-block" }}
            allowFraction="true"
          />
        </div>
        <MovieList movies={movies} />
      </main>
    </>
  );
}

export default App;
