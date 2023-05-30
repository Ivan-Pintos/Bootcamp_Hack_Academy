import { Rating } from "react-simple-star-rating";

export default function Filter({ setRating }) {
  return (
    <div className="flex justify-center items-center gap-3 my-2 p-1 border border-yellow-400 text-yellow-400 bg-black">
      <span className="text-white font-thin">Filtrar por rating:</span>
      <Rating
        onClick={setRating}
        size="25"
        SVGstyle={{ display: "inline-block" }}
        allowFraction="true"
        initialValue={0}
      />
    </div>
  );
}
