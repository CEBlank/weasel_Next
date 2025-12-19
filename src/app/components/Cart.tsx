'use client'

import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { product, ProductType } from 'app/lib/products';

import useCartStore from './cartLogic';

interface CartItem {
  id: number,
  name: string,
  price: number,
  quantity: number,
  image: string,
  imageAlt: string,
  };


export default function CartDrawer() {
  //cart drawer command
  const [open, setOpen] = useState(false)

  //set cart items state, initialize qty
  const { items, removeFromCart, updateQty } = useCartStore((state) => state);

  const subTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subTotal *.05;
  const total = subTotal + tax;

  return (

    <div>

      <button
        onClick={() => setOpen(true)}
        className="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10"
      >
        <ShoppingBagIcon
            aria-hidden="true"
            className="size-6 shrink-0"/>
            Your Cart: ({items.reduce((sum, i) => sum + i.quantity, 0)})
      </button>
      <Dialog 
        open={open} 
        onClose={setOpen} 
        className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
                <div 
                  id="cart"
                  className="flex h-full flex-col overflow-y-auto shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          <li
                            className='text-gray-400'
                            >
                              Cart: ({items.reduce((sum, i) => sum + i.quantity, 0)}) </li>
                        </ul>
                      </div>
                    </div> 

{/* Cart Logic in action */}

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">

                          {items.map((item) => (
                            <li key={item.id} className="flex py-6">
                              <div className="size-24 shrink-0 overflow-hidden rounded-md border">
                                <img alt={item.imageAlt} src={item.image} className="size-full object-cover" />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a>{item.name}</a>
                                    </h3>
                                    <p className="ml-4">${item.price.toFixed(2)}</p>
                                  </div>
                                </div>


                                <div className="flex flex-1 items-end justify-between text-sm">

                                <div className="flex">

                                    <button
                                      onClick={() => updateQty("decrement", item.id)}
                                      id="quantButton"
                                      className="btn btn-sm font-medium mx-2">
                                      -
                                    </button>

                                    <button 
                                      onClick={() => updateQty("increment", item.id)}
                                      id="quantButton"
                                      className="btn btn-sm font-medium">
                                      +
                                    </button>

                                    <span className="text-gray-500">Qty: {item.quantity}</span>
                                  </div>

                                  <div className="flex">

                                    <button 
                                      onClick={() => removeFromCart(item.id)}
                                      id="removeButton"
                                      className="btn font-medium">
                                      Remove All
                                    </button>

                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div> 



                  </div>

                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${subTotal.toFixed(2)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                      <a
                        id="checkOut"
                        href="#"
                        className="flex btn items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium shadow-xs"
                      >
                        Checkout
                      </a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or{' '}
                        <button
                          id="continueButton"
                          type="button"
                          onClick={() => setOpen(false)}
                          className="font-medium"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
