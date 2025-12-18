'use client'

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { useState } from 'react'

import { ProductType, product } from "app/lib/products";
import useCartStore from './cartLogic';


const ProductDetails = ({ product }: { product: ProductType }) => {
  const [ isOpen, setIsOpen ] = useState(false);

  const pullDetails = useCartStore((state) => state.addToCart);


  return (
    <>
      <button 
        onClick={() => pullDetails(product)}
        id="heroBtn"
        className="p-1 rounded-sm">
            Details
      </button>
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle> {product.name} </DialogTitle>
          <h2> 
            {product.name} 
          </h2>

          <ul className='border-b p-3' key={product.id} >
            <li key={product.Brand} >
              {product.Brand}
            </li>
            <li key={product.BookType}>
              {product.BookType}
            </li>
            <li key={product.Publisher}>
              {product.Publisher}
            </li>
            <li key={product.price}>
              ${product.price.toFixed(2)}
            </li>
          </ul>          
          
        </Dialog>

    </>
  )
}

export default ProductDetails;