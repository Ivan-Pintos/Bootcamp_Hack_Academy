import Counter from "./components/Counter";
import { useSelector } from "react-redux";
function App() {
  const { Count } = useSelector((state) => state);

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="dark:text-slate-300 text-slate-900 text-5xl border-2 dark:border-slate-200 border-slate-900 rounded-lg dark:bg-slate-900 bg-slate-400 py-4 px-4">
        {Count}
      </h1>
      ;
      <Counter />
    </div>
  );
}

export default App;
