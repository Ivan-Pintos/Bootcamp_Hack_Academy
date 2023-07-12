import ListLineMoviesItems from "../components/ListLineMoviesItems";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [movies, setMovies] = useState();

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
      setMovies(response.data.results);
    };

    getFirstMovies();
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      {movies && (
        <div className="text-slate-200 mx-10 flex flex-col">
          <ListLineMoviesItems
            Movies={movies.slice(0, 5)}
            Title={"Populares"}
          />
          <ListLineMoviesItems Movies={movies.slice(5, 10)} Title={"Nuevas"} />
          <ListLineMoviesItems
            Movies={movies.slice(10, 15)}
            Title={"Mas vistas"}
          />
        </div>
      )}
    </>
  );
};
