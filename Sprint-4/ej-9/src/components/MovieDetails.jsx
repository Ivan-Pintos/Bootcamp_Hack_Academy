import { Rating } from "react-simple-star-rating";
function MovieDetails({ img, title, overview, vote_average }) {
  return (
    <div className="bg-black flex flex-col md:flex-row gap-4 container mx-auto xl:w-11/12 h-full mt-5">
      <div className="relative flex md:w-1/2 lg:w-1/3 ">
        <img
          src={`https://image.tmdb.org/t/p/original/${img}`}
          alt={`Imagen de la pelicula: ${title}`}
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      </div>
      <div className="text-white flex items-center justify-center flex-col gap-4 p-4 md:w-1/2 lg:w-2/3">
        <h1 className="font-bold text-4xl"> {title}</h1>
        <span className="text-gray-300 text-justify p-4 text-sm md:text-lg">
          {overview}
        </span>
        <Rating
          initialValue={vote_average}
          size="20"
          SVGstyle={{ display: "inline-block" }}
          allowFraction="true"
          iconsCount={10}
          readonly={true}
        />
        <span className="text-gray-200">
          Rating {String(vote_average).slice(0, 3)}
        </span>
      </div>
    </div>
  );
}

export default MovieDetails;
