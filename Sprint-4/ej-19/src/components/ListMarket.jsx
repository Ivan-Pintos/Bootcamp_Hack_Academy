import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import Modal from "./Modal";
export default () => {
  const { listMarket } = useSelector((state) => state);

  return (
    <div className="flex flex-col items-center container mx-auto py-4 ">
      <h1 className="text-slate-200 text-4xl">HackList</h1>
      <div className="flex flex-col container mx-auto xl:w-2/3 py-4 px-2 gap-6">
        {listMarket.map((market) => {
          return (
            <Link to={`Mercado/${market.id}`} key={market.id}>
              <div className="bg-slate-800 border-t-8 border-blue-500 px-4 py-8">
                <h2 className="text-slate-300 text-2xl">
                  {market.name} (
                  {market.products.filter((product) => product.selected).length}
                  /{market.products.length})
                </h2>
                <small className="text-slate-400 text-md">
                  Creada: {market.createdDate}
                </small>
              </div>
            </Link>
          );
        })}
        <Modal />
      </div>
    </div>
  );
};
