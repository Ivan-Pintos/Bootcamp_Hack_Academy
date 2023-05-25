import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./components/movie";
function App() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getMovie1 = async () => {
      const response = [];
      let movie = await axios.get(
        "https://api.themoviedb.org/3/movie/502356?api_key=170bab87b05c5c7cd6131272619cf6bb"
      );
      response.push(movie.data);
      movie = await axios.get(
        "https://api.themoviedb.org/3/movie/385687?api_key=170bab87b05c5c7cd6131272619cf6bb"
      );
      response.push(movie.data);
      movie = await axios.get(
        "https://api.themoviedb.org/3/movie/603692?api_key=170bab87b05c5c7cd6131272619cf6bb"
      );
      response.push(movie.data);
      setMovies(response);
    };
    getMovie1();
  }, []);

  return (
    movies && (
      <>
        <Movie
          title={movies[0].title}
          year={movies[0].release_date.substring(0, 4)}
          image={movies[0].poster_path}
          score={movies[0].vote_average}
        />
        <Movie
          title={movies[1].title}
          year={movies[1].release_date.substring(0, 4)}
          image={movies[1].poster_path}
          score={movies[1].vote_average}
        />
        <Movie
          title={movies[2].title}
          year={movies[2].release_date.substring(0, 4)}
          image={movies[2].poster_path}
          score={movies[2].vote_average}
        />
      </>
    )
  );
}

export default App;
