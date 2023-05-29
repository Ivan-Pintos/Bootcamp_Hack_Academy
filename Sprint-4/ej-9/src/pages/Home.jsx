import MovieList from "../components/MovieList";
import Filter from "../components/filter";
import MoviesData from "../../data/data";

import { useState, useEffect } from "react";

function Home() {
  const [movies, setMovies] = useState(MoviesData);
  const [moviesRate, setMoviesRate] = useState(0);

  function handleMoviesRate(rate) {
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
    <main className="container mx-auto xl:w-11/12">
      <Filter setRating={handleMoviesRate} />
      <MovieList movies={movies} />
    </main>
  );
}
export default Home;
