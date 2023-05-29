import Header from "./components/header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
