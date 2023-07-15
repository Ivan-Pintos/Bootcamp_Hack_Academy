import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import uniqolor from "uniqolor";
import axios from "axios";

import Header from "../components/Header";
import Navbar from "../components/Navbar";

import { Movie, languageCodes } from "../../utils";
import "react-toastify/dist/ReactToastify.css";

export default () => {
  const notify = () => toast("Esta funcionalidad sigue en desarrollo");
  const [movie, setMovie] = useState<Movie>();
  const { id } = useParams();

  useEffect(() => {
    const getFirstMovies = async () => {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}?language=es-ES`,
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
    movie && (
      <>
        <ToastContainer
          theme="dark"
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          progressClassName={"bg-blue-500"}
        />
        <Navbar />

        <>
          <Header
            img={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            Title={movie.title}
          />
          <div className="text-slate-200 mx-10 py-5 flex flex-row gap-20">
            <div className="flex flex-col gap-4 w-2/3">
              <div className="flex flex-wrap gap-5">
                {movie.genres &&
                  movie.genres.map((genre) => {
                    const { color } = uniqolor(genre.id, {
                      saturation: 80,
                      lightness: [10, 20],
                    });

                    return (
                      <span
                        key={genre.id}
                        className="border rounded-2xl px-2 py-1 font-semibold hover:cursor-pointer hover:brightness-125"
                        style={{ backgroundColor: color }}
                        onClick={notify}
                      >
                        {genre.name}
                      </span>
                    );
                  })}
              </div>
              <h2 className="text-2xl font-semibold">Descripción</h2>
              <p>{movie.overview}</p>
              <div className="flex row w-2/3 justify-between mt-10">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">Original Lenguaje</h3>
                    <span>{languageCodes[movie.original_language]}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Cantidad de votos</h3>
                    <span>{movie.vote_count}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Remuneracion?</h3>
                    <span>{movie.revenue}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Fecha de lanzamiento
                    </h3>
                    <span>{movie.release_date}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Duracion:</h3>
                    <span>{movie.runtime}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/3 gap-4">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={`poster de la pelicula ${movie.title}`}
                className="rounded-xl"
              />
            </div>
          </div>
        </>
      </>
    )
  );
};
