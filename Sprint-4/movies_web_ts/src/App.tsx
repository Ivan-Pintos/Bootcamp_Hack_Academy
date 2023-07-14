import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movie/:id" element={<Movie />} />
    </Routes>
  );
}
