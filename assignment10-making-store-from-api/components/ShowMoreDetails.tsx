import Image from 'next/image'
import React,{Fragment} from 'react'
import { Dialog, Transition } from '@headlessui/react'


const ShowMoreDetails = (props: any) => {
  
    // console.log(closeMo[0])
  return (
    <>
    <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10"  onClose={props.closeModal}>
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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-700"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-700"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Details
                  </Dialog.Title>
                  <div className="mt-2 border-2 border-black p-2">
                    <div className="flex justify-center mt-2 border-2 border-pink-500">
                        {props.singleProduct.title}
                    </div>
                    <div className="relative h-32 mx-14 mt-2">
                        <Image src={props.singleProduct.image} fill alt={props.singleProduct.title}/>
                    </div>
                    <div className="mt-2 border-2 border-blue-500">
                        {props.singleProduct.description}
                    </div>
                    <div className="flex justify-around mt-2 border-2 border-green-700">
                        <div>
                        <span className="font-bold text-cyan-600">Price:</span> $ {props.singleProduct.price}
                        </div>
                        <div>
                        <span className="font-bold text-cyan-600">Category:</span> {props.singleProduct.category}
                        </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={props.closeModal}
                    >
                      Show Other Product
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ShowMoreDetails