export default ({ movie }) => (
  <div className="flex  flex-col justify-center w-1/5  items-center">
    <img
      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
      alt={`Poster image of ${movie.title} movie`}
    />
    <div className="bg-slate-900 py-2 h-full w-full text-center">
      {movie.title}
    </div>
  </div>
);
