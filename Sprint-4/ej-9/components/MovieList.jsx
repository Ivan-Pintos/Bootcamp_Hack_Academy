import Movie from "../components/Movie";
function MovieList({ movies }) {
  return (
    <div className="flex flex-wrap bg-black p-10 justify-center gap-4">
      {movies.length !== 0 ? (
        movies.map((movie) => {
          return <Movie movie={movie} key={movie.id} />;
        })
      ) : (
        <span className="text-white text-2xl">
          Lo sentimos, no se encontraron películas con el rating solicitado
        </span>
      )}
    </div>
  );
}
export default MovieList;
