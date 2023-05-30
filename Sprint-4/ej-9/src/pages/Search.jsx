import { useState, useEffect } from "react";
import axios from "axios";

import Movie from "../components/Movie";
function Search() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function loadFirstsMovies() {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&page=1&sort_by=popularity.desc`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmE3YmQzMmY4Mzc3MjQ3MDk1NDdlZGJkYjg2ZmVjOSIsInN1YiI6IjY0NmZhNjgwYzVhZGE1MDEzNTgzNzAwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xpoA7eumwNjuWEiG_oWq9yq6fbxgXZIRPPpjXF41Fjw",
        },
      };

      let response = await axios.request(options);
      setMovies(response.data.results);
    }
    loadFirstsMovies();
  }, []);

  async function handlerSearchMovies() {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=1`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmE3YmQzMmY4Mzc3MjQ3MDk1NDdlZGJkYjg2ZmVjOSIsInN1YiI6IjY0NmZhNjgwYzVhZGE1MDEzNTgzNzAwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xpoA7eumwNjuWEiG_oWq9yq6fbxgXZIRPPpjXF41Fjw",
      },
    };

    let response = await axios.request(options);
    setMovies(response.data.results);
  }
  return (
    <section className="text-gray-300 bg-black flex flex-col container mx-auto items-center xl:w-11/12">
      <form className="w-2/3 my-3" onSubmit={(event) => event.preventDefault()}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
            placeholder="Nombre de la pelicula..."
            required
            onChange={(event) => setMovieTitle(event.target.value)}
          />
          <button
            type="submit"
            className="text-white hover:text-black font-medium rounded-lg text-sm absolute right-2.5 bottom-2.5 bg-black hover:bg-white transition-all border hover:border-black  px-4 py-2"
            onClick={handlerSearchMovies}
          >
            Buscar
          </button>
        </div>
      </form>
      <div className="bg-black flex flex-col justify-center p-2">
        <h1 className="text-gray-200 text-center text-4xl pb-4">Peliculas</h1>
        <div className="flex flex-wrap gap-1 justify-center border-t pt-4 border-yellow-500">
          {movies !== null ? (
            movies.length !== 0 ? (
              movies.map((movie) => {
                return <Movie movie={movie} key={movie.id} />;
              })
            ) : (
              <span
                className="text-white text-2xl "
                onClick={() => console.log(movies)}
              >
                Lo sentimos, no se encontraron películas con el nombre ingresado
              </span>
            )
          ) : (
            <div
              role="status"
              className="flex items-center justify-center h-20 bg-black"
            >
              <svg
                aria-hidden="true"
                className=" h-8 text-gray-200 animate-spin dark:text-black fill-yellow-400"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
export default Search;
