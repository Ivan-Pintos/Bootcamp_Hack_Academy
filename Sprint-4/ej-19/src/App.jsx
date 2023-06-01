import ListMarket from "./components/ListMarket";
import ListProduct from "./components/ListProduct";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListMarket />} />
      <Route path="Mercado/:id" element={<ListProduct />} />
      {/* <Route path="*" element={<ListMarket />} /> */}
    </Routes>
  );
}

export default App;
