import { AiFillStar } from "react-icons/ai";
import { Movie } from "../../type.ts";

type MovieProps = {
  movie: Movie;
  rate?: boolean;
};
export default ({ movie, rate }: MovieProps) => (
  <div className="flex flex-col  w-1/5 items-center relative">
    <img
      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
      alt={`Poster image of ${movie.title} movie`}
    />
    <div className="bg-slate-900 py-2 h-full w-full text-center">
      {movie.title}
    </div>
    {rate && (
      <span className="flex gap-2 items-center px-2 absolute text-yellow-500 right-0 mt-2 mr-2 bg-slate-950">
        <span>{movie.vote_average}</span>
        <AiFillStar />
      </span>
    )}
  </div>
);
