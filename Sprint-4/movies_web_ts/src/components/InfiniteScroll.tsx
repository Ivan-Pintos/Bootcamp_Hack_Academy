import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import axios from "axios";

import { Movie } from "../../utils";

type InfiniteScrollProps = {
  originalMovies: Movie[];
  setOriginalMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
};
export default ({ originalMovies, setOriginalMovies }: InfiniteScrollProps) => {
  const [page, setPage] = useState<number>(2);

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?page=${page}`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNThjYTNkMTI5YzAxMGZmY2NmMmM3OWEyMWNmNTQzZSIsInN1YiI6IjY0YWVmOGVmY2RkYmJjMDBlOGJiN2E3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5-Zk6auzNE8hgBnOSzu2WVskOWMBqahahPu9QCVlFLI",
      },
    };

    const response = await axios.request(options);
    setOriginalMovies((prev) => [...prev, ...response.data.results]);
    setPage((prev) => prev + 1);
    return;
  };
  return (
    <InfiniteScroll
      dataLength={originalMovies.length}
      next={fetchData}
      hasMore={page <= 500}
      loader={""}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      ""
    </InfiniteScroll>
  );
};
