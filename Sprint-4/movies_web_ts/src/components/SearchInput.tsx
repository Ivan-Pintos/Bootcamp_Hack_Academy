import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";

type searchProps = {
  ApiUrl: string;
  setResponse: React.Dispatch<React.SetStateAction<any[]>>;
  originalContent?: any[];
  searchType?: "onChange" | "onSubmit";
  setAllData?: React.Dispatch<React.SetStateAction<any>>;
  setExternalQuery?: React.Dispatch<React.SetStateAction<string>>;
};

export default ({
  ApiUrl,
  setResponse,
  searchType,
  originalContent,
  setExternalQuery,
  setAllData,
}: searchProps) => {
  const [query, setQuery] = useState<string>("");

  const handleSearch = async (value: string) => {
    if (value?.trim()) {
      const options = {
        method: "GET",
        url: ApiUrl,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNThjYTNkMTI5YzAxMGZmY2NmMmM3OWEyMWNmNTQzZSIsInN1YiI6IjY0YWVmOGVmY2RkYmJjMDBlOGJiN2E3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5-Zk6auzNE8hgBnOSzu2WVskOWMBqahahPu9QCVlFLI",
        },
        params: {
          query: value,
        },
      };

      let response = await axios.request(options);
      setAllData && setAllData({ total_pages: response.data.total_pages });
      return setResponse(response.data.results);
    } else {
      return originalContent && setResponse(originalContent);
    }
  };
  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setExternalQuery && setExternalQuery(event.target.value);
    searchType === "onChange" && handleSearch(event.target.value);
  };

  return (
    <form
      className="flex"
      onSubmit={(event) => {
        event.preventDefault();
        handleSearch(query);
      }}
    >
      <input
        type="text"
        placeholder="Buscar"
        className="rounded-s-lg h-full border-0 border-r-2 border-slate-200 bg-slate-100 text-slate-800 outline-0"
        onChange={handleChangeSearch}
      />
      <button className="bg-slate-200 h-full rounded-r-lg text-slate-950 p-2 text-xl">
        <AiOutlineSearch />
      </button>
    </form>
  );
};
