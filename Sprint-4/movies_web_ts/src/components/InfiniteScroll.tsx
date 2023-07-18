import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";
import axios from "axios";

type InfiniteScrollProps = {
  ApiUrl: string;
  originalContent: any[];
  iterationMaxNumber: number;
  setOriginalContent: React.Dispatch<React.SetStateAction<any[]>>;
  resetPageCounter?: boolean;
};

export default ({
  originalContent,
  setOriginalContent,
  ApiUrl,
  iterationMaxNumber,
  resetPageCounter,
}: InfiniteScrollProps) => {
  const [page, setPage] = useState<number>(2);

  useEffect(() => {
    resetPageCounter && setPage(2);
  }, [resetPageCounter]);

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: ApiUrl,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNThjYTNkMTI5YzAxMGZmY2NmMmM3OWEyMWNmNTQzZSIsInN1YiI6IjY0YWVmOGVmY2RkYmJjMDBlOGJiN2E3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5-Zk6auzNE8hgBnOSzu2WVskOWMBqahahPu9QCVlFLI",
      },
      params: {
        page: page,
      },
    };

    const response = await axios.request(options);
    setOriginalContent((prev) => [...prev, ...response.data.results]);
    setPage((prev) => prev + 1);
    console.log(page);
    return;
  };
  return (
    <InfiniteScroll
      dataLength={originalContent.length}
      next={fetchData}
      hasMore={page <= iterationMaxNumber}
      loader={"Loading more content"}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {}
    </InfiniteScroll>
  );
};
