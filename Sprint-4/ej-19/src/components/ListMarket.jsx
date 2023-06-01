import { useSelector, useDispatch } from "react-redux";
import { addMarket } from "../redux/listMarketSlice";
import { Link } from "react-router-dom";

export default () => {
  const listMarket = useSelector((state) => state.listMarket);
  const dispatch = useDispatch();

  const hadlerCreateMarket = () => {
    dispatch(
      addMarket({
        id: 4,
        name: "Frutería",
        createdDate: Date(),
        products: [
          { id: 1, name: "Bananas", selected: false },
          { id: 2, name: "Manzanas", selected: true },
          { id: 3, name: "Frutillas", selected: false },
          { id: 4, name: "Sandías", selected: true },
        ],
      })
    );
  };
  return (
    <div className="flex flex-col items-center container mx-auto py-4 relative">
      <h1 className="text-slate-200 text-4xl">HackList</h1>
      <div className="flex flex-col container mx-auto xl:w-2/3 py-4 px-2 gap-6">
        {listMarket.map((market) => {
          return (
            <Link to={`Mercado/${market.id}`} key={market.id}>
              <div className="bg-slate-800 border-t-8 border-blue-500 px-4 py-8">
                <h2 className="text-slate-300 text-2xl">
                  {market.name} (
                  {
                    market.products.filter(
                      (product) => product.selected == true
                    ).length
                  }
                  /{market.products.length})
                </h2>
                <small className="text-slate-400 text-md">
                  Creada: {market.createdDate}
                </small>
              </div>
            </Link>
          );
        })}
        <button
          className="bg-green-600 hover:bg-green-500 rounded-full
          absolute -bottom-10 text-4xl flex justify-center py-2 px-2"
          onClick={hadlerCreateMarket}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
