import FilterStars from "../components/FilterStars";
import MoviesItem from "../components/MovieItem";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import header from "../img/header.jpg";

import { Movie } from "../../utils";
import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getFirstMovies = async () => {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNThjYTNkMTI5YzAxMGZmY2NmMmM3OWEyMWNmNTQzZSIsInN1YiI6IjY0YWVmOGVmY2RkYmJjMDBlOGJiN2E3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5-Zk6auzNE8hgBnOSzu2WVskOWMBqahahPu9QCVlFLI",
        },
      };

      let response = await axios.request(options);
      setAllMovies(response.data.results);
      setMovies(response.data.results);
      return;
    };

    getFirstMovies();
  }, []);

  return (
    <>
      <Navbar />
      <Header img={header} />
      <div className="text-slate-200 mx-10 flex flex-col gap-2 mt-5">
        <section className="flex justify-center">
          <FilterStars originalMovies={allMovies} setMovies={setMovies} />
        </section>

        <section className="flex items-center flex-col gap-4">
          <h1 className="text-2xl">Movies</h1>
          <div className="flex flex-wrap gap-2 justify-center">
            {movies.length > 0
              ? movies.map((movie: Movie) => {
                  return (
                    <MoviesItem movie={movie} key={movie.id} rate={true} />
                  );
                })
              : "Sorry actually we do not have any movie with the filters selected. Please select other filter options."}
          </div>
        </section>
      </div>
    </>
  );
};
