import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import { Movie } from "../../type";

type FilterProps = {
  originalMovies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
};
export default ({ originalMovies, setMovies }: FilterProps) => {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRating = (rate: number) => {
    setRatingValue(rate);
    setMovies(
      originalMovies.filter((movie: Movie) => movie.vote_average >= rate * 2)
    );
  };

  return (
    <Rating
      onClick={handleRating}
      size={25}
      SVGstyle={{ display: "inline-block" }}
      allowFraction={true}
      initialValue={ratingValue}
      showTooltip={true}
      tooltipClassName="w-40 text-center bg-slate-800"
      tooltipArray={[
        "1 Rating",
        "2 Rating",
        "3 Rating",
        "4 Rating",
        "5 Rating",
        "6 Rating",
        "7 Rating",
        "8 Rating",
        "9 Rating",
        "10 Rating",
      ]}
      tooltipDefaultText="0 Rating"
    />
  );
};
