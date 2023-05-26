import Movie from "../components/Movie";
function MovieList({ movies }) {
  console.log();
  return (
    <div className="d-flex flex-wrap gap-1 justify-content-center bg-black p-4">
      {movies.length !== 0 ? (
        movies.map((movie) => {
          return <Movie movie={movie} key={movie.id} />;
        })
      ) : (
        <span className="text-white">
          Lo sentimos, no se encontraron películas con el rating solicitado
        </span>
      )}
    </div>
  );
}
export default MovieList;
