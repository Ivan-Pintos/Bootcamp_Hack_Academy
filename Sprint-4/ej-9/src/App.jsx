import MoviesData from "../data/data";

import Header from "../components/header";
import MovieList from "../components/MovieList";
import Filter from "../components/filter";

import { useState, useEffect } from "react";

import "./index.css";

function App() {
  const [movies, setMovies] = useState(MoviesData);
  const [moviesRate, setMoviesRate] = useState(0);

  function handleMoviesRate(rate) {
    console.log(rate);
    rate = rate * 2;
    rate = rate - 2;
    setMoviesRate(rate);
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
        <Filter setRating={handleMoviesRate} />
        <MovieList movies={movies} />
      </main>
    </>
  );
}

export default App;
