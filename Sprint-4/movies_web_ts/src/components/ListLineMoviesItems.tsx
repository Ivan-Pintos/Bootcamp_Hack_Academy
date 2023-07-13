import LineMoviesItem from "./LineMoviesItem";

type Movie = {
  adult: number;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type LineMoviesProps = {
  Movies: Movie[];
  Title: string;
  category: string;
};

const LineMovies = ({ Movies, Title, category }: LineMoviesProps) => {
  return (
    <div className="mt-10 flex flex-col gap-5">
      <div className="border-b border-blue-400 pb-4 flex justify-between">
        <h1>{Title}</h1>
        <button className="underline-offset-2 underline hover:cursor-pointer">
          See more
        </button>
      </div>
      <div className="flex justify-between gap-2">
        {Movies.map((movie) => (
          <LineMoviesItem movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default LineMovies;
