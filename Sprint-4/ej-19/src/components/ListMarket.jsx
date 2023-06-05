import { useSelector } from "react-redux";
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

import Modal from "./Modal";
import Market from "./Market";

export default () => {
  const { listMarket } = useSelector((state) => state);
  const [open, setOpen] = useState(false);
  return (
    <main className="flex flex-col items-center container py-4 relative mx-auto xl:w-2/3">
      <h1 className="text-slate-200 text-4xl">HackList</h1>
      <ul className="flex flex-col container py-4 px-2 gap-6">
        {listMarket.map((market) => {
          return <Market market={market} key={market.id} />;
        })}
      </ul>
      <button
        className="bg-green-600 hover:bg-green-500 rounded-full
          absolute -bottom-10 left-0 text-2xl flex justify-center py-2 px-2"
        onClick={() => setOpen(true)}
      >
        <PlusIcon className="w-6 h-6" />
      </button>
      <Modal open={open} setOpen={setOpen} />
    </main>
  );
};
