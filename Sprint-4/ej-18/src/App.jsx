import ProductList from "./components/ProductList";
function App() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-2">
      <h1 className="text-slate-800 dark:text-slate-300 text-4xl py-2">
        Lista de Compras
      </h1>
      <ProductList />
    </div>
  );
}

export default App;
