import FilterStars from "../components/FilterStars";
import MoviesItem from "../components/MoviesItem";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import header from "../img/header.jpg";

import { Movie } from "../../type";
import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getFirstMovies = async () => {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
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

        <section className="flex items-center flex-col">
          <h1 className="text-2xl">Movies</h1>
          <div className="flex flex-wrap gap-2 justify-center">
            {movies.length > 0
              ? movies.map((movie: Movie) => {
                  return (
                    <MoviesItem movie={movie} key={movie.id} rate={true} />
                  );
                })
              : ""}
          </div>
        </section>
      </div>
    </>
  );
};
