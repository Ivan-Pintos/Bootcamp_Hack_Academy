import Header from "./components/header";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import { Route, Routes } from "react-router-dom";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pelicula/:id" element={<Movie />} />
        <Route path="/contacto/" element={<Contact />} />
        <Route path="/sobre-nosotros/" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
