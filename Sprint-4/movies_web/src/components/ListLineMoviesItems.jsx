import LineMoviesItem from "./LineMoviesItem";
export default ({ Movies, Title, category }) => {
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
