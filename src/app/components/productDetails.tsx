'use client'

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Transition
} from '@headlessui/react'
import { useState } from 'react'

import { ProductType, product } from "app/lib/products";
import useCartStore from './cartLogic';


const ProductDetails = ({ product }: { product: ProductType }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const setItemState = useCartStore((state) => state.addToCart);

  function openModal(){
    setIsOpen(true);
    setItemState(product);
  }

  function closeModal(){
    setIsOpen(false);
  }


  return (
    <>
      <div>
        <button 
          onClick={() => openModal()}
          id="heroBtn"
          className="p-1 rounded-sm">
              Details
        </button>
      </div>

    <div>
        <Dialog 
          className="relative z-10" 
          open={isOpen} 
          onClose={closeModal}>

            <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center"> 

              <DialogPanel
                transition    
                id="modalPanel"      
                className="w-full max-w-3xl transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl border-2"
                >

                  <DialogBackdrop
                    transition
                    id='dialog'
                    className="fixed transition-opacity duration-500 ease-in-out data-closed:opacity-0 "
                    />

            <h2 className="text-2xl text-center">{product.name}</h2>
          
              <div className="grid grid-cols-2 gap-x-2 gap-y-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8 bg-white ">
          
                  <div className="grid grid-col-1 ">
                      <img
                        className='max-h-50'
                        src={product.imageSrc}
                        alt={product.imageAlt}>
                      </img>
                  </div>

                    <div className="grid grid-cols-2 p-5 text-justify">

                        <div className=''>
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