import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { addMarket } from "../redux/listMarketSlice";

export default function Modal() {
  //Modal things
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const [inpuNameList, setinpuNameList] = useState("");

  const dispatch = useDispatch();
  const { listMarket } = useSelector((state) => state);

  const handlerCreateMarket = () => {
    setOpen(false);
    dispatch(
      addMarket({
        id: listMarket[listMarket.length - 1].id + 1,
        name: inpuNameList,
        createdDate: Date(),
        products: [],
      })
    );
  };
  const handlerInputNameList = (value) => {
    setinpuNameList(value);
  };
  return (
    <div className="relative">
      <button
        className="bg-green-600 hover:bg-green-500 rounded-full
          absolute -bottom-10 text-4xl flex justify-center py-2 px-2"
        onClick={() => setOpen(true)}
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
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left shadow-2xl transition-all w-full sm:w-2/3">
                  <form onSubmit={(e) => e.preventDefault}>
                    <div className="bg-slate-700 px-4 pb-4 pt-5">
                      <div className="flex flex-col gap-5">
                        <Dialog.Title
                          as="h3"
                          className="font-bold text-xl leading-6 text-slate-200"
                        >
                          Nueva Lista
                        </Dialog.Title>
                        <div className="mt-2">
                          <input
                            type="text"
                            placeholder="Nombre de la lista"
                            value={inpuNameList}
                            className=" border border-slate-950 rounded outline-none 
                            w-full text-slate-200 bg-slate-600 py-2 px-2"
                            onChange={(e) =>
                              handlerInputNameList(e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-800 px-4 py-3 flex justify-between">
                      <button
                        type="button"
                        className="w-20 rounded-md hover:bg-gray-50 ring-1 ring-inset ring-gray-300
                      px-3 py-2 text-sm font-semibold text-slate-200 hover:text-slate-800"
                        ref={cancelButtonRef}
                        onClick={() => setOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="w-20 rounded-md bg-blue-700 hover:bg-blue-500
                      px-3 py-2 text-sm font-semibold text-slate-200"
                        onClick={handlerCreateMarket}
                      >
                        Crear
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
