import LineMoviesItem from "./MovieItem.tsx";
import { Movie, sortvalue } from "../../utils.ts";

import { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

type LineMoviesProps = {
  Title: string;
  value: sortvalue;
  rate?: boolean;
};

export default ({ Title, value, rate }: LineMoviesProps) => {
  const sortValueMap: Record<sortvalue, string> = {
    [sortvalue.votes]: "vote_count.desc",
    [sortvalue.populars]: "popularity.desc",
    [sortvalue.news]: "primary_release_date.desc",
  };

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getFirstMovies = async () => {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=${sortValueMap[value]}`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNThjYTNkMTI5YzAxMGZmY2NmMmM3OWEyMWNmNTQzZSIsInN1YiI6IjY0YWVmOGVmY2RkYmJjMDBlOGJiN2E3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5-Zk6auzNE8hgBnOSzu2WVskOWMBqahahPu9QCVlFLI",
        },
      };

      let response = await axios.request(options);
      let validMovies = response.data.results.filter(
        (movie: Movie) => movie.poster_path != null && movie.poster_path != ""
      );
      console.log(validMovies);
      return setMovies(validMovies.slice(0, 5));
    };

    getFirstMovies();
  }, [value]);

  return (
    <div className="mt-10 flex flex-col gap-5">
      <div className="border-b border-blue-400 pb-4 flex justify-between">
        <h1>{Title}</h1>
        <Link
          to="/movies"
          className="underline-offset-2 underline hover:cursor-pointer"
        >
          See more
        </Link>
      </div>
      <div className="flex justify-between gap-2">
        {movies.map(
          (movie: Movie) =>
            movie.poster_path && (
              <LineMoviesItem
                movie={movie}
                key={movie.id}
                rate={rate ? true : false}
              />
            )
        )}
      </div>
    </div>
  );
};
