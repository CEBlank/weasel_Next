'use client'

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition
} from '@headlessui/react'
import { useState } from 'react'

import { ProductType, product } from "app/lib/products";
import useCartStore from './cartLogic';


const ProductDetails = ({ product }: { product: ProductType }) => {
  const [ isOpen, setIsOpen ] = useState(false);

  const { activeItem, addToCart } = useCartStore((state) => state);

  function openModal(){
    setIsOpen(true);
    //activeItem(product); //tossing type error here "not a function"
  }

  function closeModal(){
    setIsOpen(false);
  }
  
  return (
    <>
    <div className='mb-3 flex gap-3'> 

      <div>
        <button 
          //data-dialog-target="modal-xl"
          onClick={() => openModal()}
          id="heroBtn"
          className="p-1 rounded-sm">
              Details
        </button>
      </div>


        <Dialog 
          open={isOpen} 
          onClose={setIsOpen} 
          className="relative z-10">

        <DialogBackdrop
          transition
          className="fixed flex shrink-0 inset-0 bg-gray-500/70 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative max-w-4xl transform sm:flex-wrap rounded bg-white text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in lg:min-w-4xl sm:my-5 sm:w-full sm:max-w-sm data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded border border-fuchsia-950 shadow-fuchsia-950 shadow-sm">
                <div className="sm:flex sm:items-start">

                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h2" className="text-2xl font-semibold text-grey-400">
                      {product.name}
                    </DialogTitle>
                    <div className="mt-2">
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8 bg-white ">
          
                    <div className="grid grid-col-1 ">
                        <img
                          className='max-h-50'
                          src={product.imageSrc}
                          alt={product.imageAlt}>
                        </img>
                    </div>

                    <div className="grid grid-cols-1 p-5 text-justify">

                        <div>
                          <ul>
                            <li>
                              {product.Brand}
                            </li>
                            <li>
                              {product.Publisher}
                            </li>
                            <li>
                              {product.BookType}
                            </li>
                            <li>
                              ${product.price.toFixed(2)}
                            </li>
                          </ul>
                        </div>
                    </div>
                      
                    <div className="justify-end">
                          <button 
                            onClick={() => closeModal()}
                            id="heroBtn"
                            className="p-1 rounded-sm">
                              Close
                          </button>
                      </div>

                    <div className='justify-end'>
                        <button
                          onClick={() => addToCart(product)}
                          id="cartBtn"
                          className="p-1 rounded-sm">
                            Add to Cart
                        </button>
                    </div>

                    </div>
                    </div>
                  </div>
                </div>
              </div>
            
            </DialogPanel>
                
              </div>
            </div> 



        </Dialog>





      </div>
    </>
  )
}

export default ProductDetails;