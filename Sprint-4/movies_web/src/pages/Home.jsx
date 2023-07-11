import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ListMovies from "../components/ListMovies";
export default () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="text-slate-200 mx-10 flex flex-col">
        <div className="mt-10 flex flex-col gap-5">
          <div className="border-b border-blue-400 pb-2 flex justify-between">
            <h1>Populares</h1>
            <button className="underline-offset-2 underline hover:cursor-pointer">
              See more
            </button>
          </div>

          <div className="flex justify-between">
            <div className="h-48 w-1/5 flex gap-2 flex-col justify-between">
              <div className="bg-blue-400 h-2/3"></div>
              <div className="bg-blue-400 h-1/4"></div>
            </div>
            <div className="h-48 w-1/5 flex gap-2 flex-col justify-between">
              <div className="bg-blue-400 h-2/3"></div>
              <div className="bg-blue-400 h-1/4"></div>
            </div>
            <div className="h-48 w-1/5 flex gap-2 flex-col justify-between">
              <div className="bg-blue-400 h-2/3"></div>
              <div className="bg-blue-400 h-1/4"></div>
            </div>
            <div className="h-48 w-1/5 flex gap-2 flex-col justify-between">
              <div className="bg-blue-400 h-2/3"></div>
              <div className="bg-blue-400 h-1/4"></div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-5">
          <div className="border-b border-blue-400 pb-2 flex justify-between">
            <h1>Nuevas</h1>
            <button className="underline-offset-2 underline hover:cursor-pointer">
              See more
            </button>
          </div>

          <div className="flex justify-between">
            <div className="h-48 w-1/5 flex gap-2 flex-col justify-between">
              <div className="bg-blue-400 h-2/3"></div>
              <div className="bg-blue-400 h-1/4"></div>
            </div>
            <div className="h-48 w-1/5 flex gap-2 flex-col justify-between">
              <div className="bg-blue-400 h-2/3"></div>
              <div className="bg-blue-400 h-1/4"></div>
            </div>
            <div className="h-48 w-1/5 flex gap-2 flex-col justify-between">
              <div className="bg-blue-400 h-2/3"></div>
              <div className="bg-blue-400 h-1/4"></div>
            </div>
            <div className="h-48 w-1/5 flex gap-2 flex-col justify-between">
              <div className="bg-blue-400 h-2/3"></div>
              <div className="bg-blue-400 h-1/4"></div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-5">
          <div className="border-b border-blue-400 pb-2 flex justify-between">
            <h1>Mas vistas</h1>
            <button className="underline-offset-2 underline hover:cursor-pointer">
              See more
            </button>
          </div>
          <div className="flex justify-between">
            <div className="h-48 w-1/5 flex gap-2 flex-col justify-between">
              <div className="bg-blue-400 h-2/3"></div>
              <div className="bg-blue-400 h-1/4"></div>
            </div>
            <div className="h-48 w-1/5 flex gap-2 flex-col justify-between">
              <div className="bg-blue-400 h-2/3"></div>
              <div className="bg-blue-400 h-1/4"></div>
            </div>
            <div className="h-48 w-1/5 flex gap-2 flex-col justify-between">
              <div className="bg-blue-400 h-2/3"></div>
              <div className="bg-blue-400 h-1/4"></div>
            </div>
            <div className="h-48 w-1/5 flex gap-2 flex-col justify-between">
              <div className="bg-blue-400 h-2/3"></div>
              <div className="bg-blue-400 h-1/4"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
