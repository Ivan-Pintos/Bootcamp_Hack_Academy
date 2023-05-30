import Header from "./components/header";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Error from "./pages/Error";
import Search from "./pages/Search";
import { Route, Routes, Navigate, useParams } from "react-router-dom";

import "./index.css";

function App() {
  function MovieRedirect() {
    const params = useParams();
    return <Navigate replace to={`/pelicula/${params.id}`} />;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pelicula/:id" element={<Movie />} />
        <Route path="/contacto/" element={<Contact />} />
        <Route path="/sobre-nosotros/" element={<AboutUs />} />
        <Route path="/movie/:id" element={<MovieRedirect />} />
        <Route path="/buscar" element={<Search />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
