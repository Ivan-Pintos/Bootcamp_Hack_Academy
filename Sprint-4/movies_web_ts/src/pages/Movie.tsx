import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Movie } from "../../type";

export default () => {
  const [movie, setMovie] = useState<Movie>();
  const { id } = useParams();

  useEffect(() => {
    const getFirstMovies = async () => {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNThjYTNkMTI5YzAxMGZmY2NmMmM3OWEyMWNmNTQzZSIsInN1YiI6IjY0YWVmOGVmY2RkYmJjMDBlOGJiN2E3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5-Zk6auzNE8hgBnOSzu2WVskOWMBqahahPu9QCVlFLI",
        },
      };

      let response = await axios.request(options);
      console.log(response.data);
      return setMovie(response.data);
    };

    getFirstMovies();
  }, []);
  return (
    <>
      <Navbar />
      {movie?.backdrop_path && (
        <Header
          img={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        />
      )}
      <div className="text-slate-200 mx-10 flex flex-col"></div>
    </>
  );
};
