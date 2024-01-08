"use client";

import { CarProps } from "@/types";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface CarDetailsProps {
  isOpen: boolean;
  closeModel: () => void;
  Car: CarProps;
}

const CarDetails = ({ isOpen, closeModel, Car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModel}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-700"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <button
                    type="button"
                    className="absolute z-10 p-2 rounded-full top-2 right-2 w-fit bg-primary-blue-100"
                    onClick={closeModel}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex flex-col flex-1 gap-3">
                    <div className="relative w-full h-40 bg-center bg-cover rounded-lg bg-primary-blue">
                      <Image
                        src="/hero.png"
                        alt="car model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>

                    <div className="flex gap-3">
                      <div className="relative flex-1 w-full h-24 rounded-lg bg-primary-blue-100">
                        <Image
                          src="/hero.png"
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>

                      <div className="relative flex-1 w-full h-24 rounded-lg bg-primary-blue-100">
                        <Image
                          src="/hero.png"
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>

                      <div className="relative flex-1 w-full h-24 rounded-lg bg-primary-blue-100">
                        <Image
                          src="/hero.png"
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 gap-2">
                    <h2 className="text-xl font-semibold capitalize">
                      {Car.make} {Car.model}
                    </h2>

                    <div className="flex flex-wrap gap-4 mt-3">
                      {Object.entries(Car).map(([key,value])=>{
                            return (
                                <div className="flex justify-between w-full gap-5 " key={key}>
                                    <h3 className="text-gray-700 capitalize">{key.split("_").join(" ")}</h3>
                                    <p className="text-black-600 bold">{value}</p>
                                </div>
                            )
                        } )}
                      {/* <div className="flex justify-between w-full gap-5 ">
                        <h3>city mpg</h3>
                        <p>{Car.city_mpg}</p>
                      </div>

                      <div className="flex justify-between w-full gap-5 ">
                        <h3>class</h3>
                        <p>{Car.class}</p>
                      </div>

                      <div className="flex justify-between w-full gap-5 ">
                        <h3>combination mpg</h3>
                        <p>{Car.combination_mpg}</p>
                      </div> */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
