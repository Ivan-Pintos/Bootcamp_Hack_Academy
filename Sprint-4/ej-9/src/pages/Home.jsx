import MovieList from "../components/MovieList";
import Filter from "../components/filter";
import { useState } from "react";

function Home() {
  const [movies, setMovies] = useState([]);
  const [moviesRate, setMoviesRate] = useState(0);

  function handleMoviesRate(rate) {
    setMoviesRate(rate * 2 - 2);
  }

  return (
    <main className="container mx-auto xl:w-11/12">
      <Filter setRating={handleMoviesRate} />
      <MovieList
        movies={movies}
        moviesRate={moviesRate}
        setMovies={setMovies}
      />
    </main>
  );
}
export default Home;
