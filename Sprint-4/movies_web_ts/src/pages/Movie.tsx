import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import uniqolor from "uniqolor";
import axios from "axios";

import YoutubeVideo from "../components/YoutubeVideo";
import { Rating } from "react-simple-star-rating";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

import { Movie, languageCodes, MovieVideos } from "../../utils";
import "react-toastify/dist/ReactToastify.css";

export default () => {
  const notify = () => toast("Esta funcionalidad sigue en desarrollo");
  const [movie, setMovie] = useState<Movie>();
  const [movieVideos, setMovieVideos] = useState<MovieVideos>();
  const { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
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
      return setMovie(response.data);
    };

    getMovie();
  }, []);

  useEffect(() => {
    const getVideos = async () => {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/videos`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNThjYTNkMTI5YzAxMGZmY2NmMmM3OWEyMWNmNTQzZSIsInN1YiI6IjY0YWVmOGVmY2RkYmJjMDBlOGJiN2E3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5-Zk6auzNE8hgBnOSzu2WVskOWMBqahahPu9QCVlFLI",
        },
      };

      let response = await axios.request(options);
      return setMovieVideos({
        ...response.data,
        results: response.data.results.slice(0, 5),
      });
    };

    getVideos();
  }, [movie]);

  const MovieDuration = (durationtTime: number): string => {
    const hours: number = Math.floor(durationtTime / 60);
    const munutes: number = durationtTime - hours * 60;
    return `${hours}h ${munutes}m`;
  };
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
                    <span>{movie.vote_count.toLocaleString("es-ES")}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Recaudacion</h3>
                    <span>
                      $ {movie.revenue && movie.revenue.toLocaleString("es-ES")}
                    </span>
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
                    <span>{movie.runtime && MovieDuration(movie.runtime)}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Rating:</h3>
                    <Rating
                      size={25}
                      SVGstyle={{ display: "inline-block" }}
                      initialValue={Math.floor(movie.vote_average)}
                      iconsCount={10}
                      readonly
                    />
                  </div>
                </div>
              </div>
              <Carousel slide={false}>
                {movieVideos?.results.map((result) => {
                  return (
                    <div className="flex w-full justify-center">
                      <YoutubeVideo VideoID={result.key} key={result.id} />
                    </div>
                  );
                })}
              </Carousel>
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
