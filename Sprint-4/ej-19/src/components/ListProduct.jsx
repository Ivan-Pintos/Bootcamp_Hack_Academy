import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import uniqolor from "uniqolor";
import {
  TrashIcon,
  ArrowLongLeftIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";

import { addProduct, removeMarket } from "../redux/listMarketSlice";
import Product from "./Product";

export default () => {
  const params = useParams();
  const market = useSelector((state) =>
    state.listMarket.find((market) => market.id === params.id)
  );
  const dispatch = useDispatch();
  const [inputProductName, setInputProductName] = useState("");

  const handlerRemoveMarket = (id) => {
    dispatch(removeMarket(id));
  };
  const handlerInputProductName = (value) => {
    setInputProductName(value);
  };
  const handlerCreateProduct = () => {
    dispatch(
      addProduct({
        marketId: Number(params.id),
        productId: nanoid(),
        product: inputProductName,
      })
    );
    setInputProductName("");
  };
  return (
    <main className="flex flex-col items-center container mx-auto py-4 relative">
      <h1 className="text-slate-200 text-4xl">HackList</h1>
      <section className="flex flex-col container mx-auto xl:w-2/3 py-4 px-2 gap-6">
        <div
          className="flex flex-col px-4 py-8 gap-2
              bg-slate-800 border-t-8 "
          style={{
            borderTopColor: uniqolor(market.id, { format: "hex" }).color,
          }}
        >
          <small className="text-slate-400 text-md">Lista de compras</small>
          <div className="flex justify-between items-center">
            <h2 className="text-slate-300 text-2xl">{market.name} </h2>
            <TrashIcon
              className="h-6 w-6 text-red-800 hover:text-red-600 hover:cursor-pointer"
              onClick={() => handlerRemoveMarket(market.id)}
            />
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
              <PlusCircleIcon className="w-6 h-6" />
            </button>
          </form>
          <ul className="mx-4">
            {market.products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </ul>
        </div>

        <Link to={"/"} className="text-sky-600 flex gap-2 items-center">
          <ArrowLongLeftIcon className="w-6 h-6" />
          Volver a la Home
        </Link>
      </section>
    </main>
  );
};
