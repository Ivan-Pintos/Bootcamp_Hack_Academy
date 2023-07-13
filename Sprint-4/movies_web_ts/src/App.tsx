import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  );
}
