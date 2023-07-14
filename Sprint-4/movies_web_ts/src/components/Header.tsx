import { useEffect } from "react";

type headerProps = {
  img: string;
};
export default ({ img }: headerProps) => {
  return (
    <div className="h-72 bg-slate-900 border-b border-b-blue-400 ">
      {img ? (
        <img
          src={img}
          alt="Header image"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gray-300 animate-pulse"></div>
      )}
    </div>
  );
};
