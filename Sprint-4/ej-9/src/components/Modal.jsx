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
            <div className="flex justify-center self-center h-screen">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="flex flex-col my-auto relative sm:w-2/3  rounded-lg transform transition-all overflow-hidden">
                  <div className="bg-gradient-to-b from-black via-yellow-923 to-black px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="flex flex-col md:flex-row justify-center m-0">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={`Imagen de la pelicula: ${movie.original_title} `}
                        className=" w-40 h-64 self-center"
                      />

                      <div className="flex flex-col w-full text-center sm:ml-4 sm:text-left justify-between">
                        <Dialog.Title
                          as="h3"
                          className="text-center font-semibold text-2xl leading-6 text-white border-b py-3 "
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
