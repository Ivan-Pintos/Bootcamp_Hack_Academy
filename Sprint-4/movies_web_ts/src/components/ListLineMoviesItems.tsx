import LineMoviesItem from "./MoviesItem.tsx";
import { Movie } from "../../type.ts";

import { Link } from "react-router-dom";

type LineMoviesProps = {
  Movies: Movie[];
  Title: string;
  category: string;
};

export default ({ Movies, Title, category }: LineMoviesProps) => {
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
        {Movies.map((movie: Movie) => (
          <LineMoviesItem movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};
