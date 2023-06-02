import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

import {
  addProduct,
  selectProduct,
  removeProduct,
  removeMarket,
} from "../redux/listMarketSlice";

export default () => {
  const listMarket = useSelector((state) => state.listMarket);
  const params = useParams();
  const dispatch = useDispatch();
  const [inputProductName, setInputProductName] = useState("");

  const handlerRemoveMarket = (id) => {
    dispatch(removeMarket(id));
  };
  const handlerInputProductName = (value) => {
    setInputProductName(value);
  };
  const handlerCreateProduct = () => {
    dispatch(addProduct({ id: Number(params.id), product: inputProductName }));
    setInputProductName("");
  };
  const handlerDeleteProduct = (idProduct) => {
    dispatch(
      removeProduct({ mercadoId: Number(params.id), productId: idProduct })
    );
  };
  const handlerSelectProduct = (idProduct) => {
    console.log("Hola");
    dispatch(
      selectProduct({ mercadoId: Number(params.id), productId: idProduct })
    );
  };
  return (
    <div className="flex flex-col items-center container mx-auto py-4 relative">
      <h1 className="text-slate-200 text-4xl">HackList</h1>
      <div className="flex flex-col container mx-auto xl:w-2/3 py-4 px-2 gap-6">
        {listMarket.map(
          (market) =>
            market.id === Number(params.id) && (
              <div
                className="flex flex-col px-4 py-8 gap-2
              bg-slate-800 border-t-8 border-blue-500"
                key={`${market.id}-M`}
              >
                <small className="text-slate-400 text-md">
                  Lista de compras
                </small>
                <div className="flex justify-between">
                  <h2 className="text-slate-300 text-2xl">{market.name} </h2>
                  <button
                    className="text-red-800 hover:text-red-600"
                    onClick={() => handlerRemoveMarket(market.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <form
                  action=""
                  className="flex mt-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="text"
                    className="w-full py-2 px-2
                  bg-slate-200 rounded-s-lg outline-none
                  text-slate-600"
                    value={inputProductName}
                    onChange={(e) => handlerInputProductName(e.target.value)}
                    placeholder="Ingrese un producto..."
                  />
                  <button
                    className="bg-slate-200 rounded-e-lg w-12 flex justify-center items-center text-slate-800 hover:text-slate-600"
                    onClick={handlerCreateProduct}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </form>
                <div className="mx-4">
                  {market.products.map((product) => (
                    <div
                      className="flex justify-between items-center py-4 mb-2"
                      key={product.id}
                    >
                      <div className=" flex gap-20">
                        <input
                          checked={product.selected ? true : false}
                          type="checkbox"
                          className="mr-2"
                          onChange={() => handlerSelectProduct(product.id)}
                        />
                        <span
                          className={`text-slate-900 dark:text-slate-300 ${
                            product.selected && "line-through"
                          }`}
                        >
                          {product.name}
                        </span>
                      </div>
                      <button
                        className="text-red-800 hover:text-red-600"
                        onClick={() => handlerDeleteProduct(product.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )
        )}
        <Link to={"/"}>
          <span className="text-sky-600 flex gap-2 items-center">
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
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            Volver a la Home
          </span>
        </Link>
      </div>
    </div>
  );
};
