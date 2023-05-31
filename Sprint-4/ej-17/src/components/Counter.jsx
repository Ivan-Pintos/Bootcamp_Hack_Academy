import { useSelector, useDispatch } from "react-redux";
import { CounterActions } from "../actions/index";
import { useState } from "react";

export default () => {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col gap-2 ">
        <div className="flex gap-2 justify-between ">
          <button
            className="py-2 px-4 dark:border-white dark:bg-slate-900 border-black bg-slate-200 dark:text-slate-400 text-slate-800"
            onClick={() => dispatch(CounterActions.Count)}
          >
            Sumar 1
          </button>
          <button
            className="py-2 px-4 dark:border-white dark:bg-slate-900 border-black bg-slate-200 dark:text-slate-400 text-slate-800"
            onClick={() => dispatch(CounterActions.Discount)}
          >
            Restar 1
          </button>
        </div>
        <div className="flex">
          <input
            type="number"
            className="outline-none rounded-s-md p-2"
            placeholder="0"
            onChange={(e) => setNumber(e.target.value)}
          />
          <button
            className="py-2 px-4 w-full dark:border-white dark:bg-slate-900 border-black bg-slate-200 dark:text-slate-400 text-slate-800"
            onClick={() => dispatch(CounterActions.SetNumber(number))}
          >
            Asignar
          </button>
        </div>
      </div>
    </>
  );
};
