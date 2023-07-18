import { Rating } from "react-simple-star-rating";
import { useState, useEffect } from "react";
import { Movie } from "../../utils";

type FilterProps = {
  originalMovies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
};
export default ({ originalMovies, setMovies }: FilterProps) => {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRating = (rate: number) => {
    setRatingValue(rate);
    setMovies(
      originalMovies.filter(
        (movie: Movie) => movie.vote_average / 2 >= rate - 1
      )
    );
  };

  useEffect(() => {
    setMovies(
      originalMovies.filter(
        (movie: Movie) => movie.vote_average / 2 >= ratingValue - 1
      )
    );
  }, [originalMovies]);

  return (
    <Rating
      onClick={handleRating}
      size={25}
      SVGstyle={{ display: "inline-block" }}
      initialValue={ratingValue}
      showTooltip={true}
      tooltipClassName="w-40 text-center bg-slate-800 inline"
      tooltipArray={[
        "0 Rating",

        "2 Rating",

        "4 Rating",

        "6 Rating",

        "8 Rating",
      ]}
      tooltipDefaultText="0 Rating"
    />
  );
};
