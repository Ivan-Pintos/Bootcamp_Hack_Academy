import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Rating } from "react-simple-star-rating";

export default function Modal({ open, setOpen, movie }) {
  if (Object.keys(movie).length !== 0) {
    console.log(movie);
    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
            <div className="flex min-h-full justify-center p-4 text-center sm:p-0 items-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden items-center rounded-lg shadow-2xl transition-all sm:my-8 sm:w-1/2 sm:min-h-screen">
                  <div className="bg-slate-900 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start ">
                      <img
                        src={movie.poster_path}
                        alt={`Imagen de la pelicula: ${movie.original_title} `}
                        className=" w-32 h-60 "
                      />

                      <div className="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-center font-semibold leading-6 text-white border-b py-2"
                        >
                          {movie.original_title}
                        </Dialog.Title>
                        <div className="mt-2 flex align-middleflex-col">
                          <p className="text-sm text-gray-200 text-justify">
                            {movie.overview}
                          </p>
                        </div>
                        <div className="flex flex-col items-center">
                          <Rating
                            initialValue={movie.vote_average}
                            size="20"
                            SVGstyle={{ display: "inline-block" }}
                            allowFraction="true"
                            iconsCount={10}
                            readonly={true}
                          />
                          <span className="text-gray-200">
                            Rating {movie.vote_average}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 flex w-full  sm:px-6">
                    <button
                      type="button"
                      className="mt-3 w-full  justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 "
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
  } else {
    return;
  }
}
