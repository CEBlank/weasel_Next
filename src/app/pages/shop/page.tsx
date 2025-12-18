"use client"

import useCartStore from "app/components/cartLogic";
import { ProductType, product } from "app/lib/products";

import { StoreCard } from "app/components/StoreCard";
//import docCount from 'app/utils/connectMongo'; 
//import client from "app/lib/mongoDB";
//import { GetServerSideProps } from "next";
//import testConnect from "app/utils/connectMongo";
//import addItem from "app/lib/addRemove";

/* 
type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
}; */


const Shop = () => {

  const addToCart = useCartStore((state) => state.addToCart);
  const products = (product || []);

 // console.log(products);
  //testConnect(); //can't use this in client component. will have to pass props

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 bg-white">
        <h2 className="sr-only">Products</h2>

        <h2
          className="text-2xl text-center mb-2 border-b">
            All Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 bg-white">
        
          {products.map((product) => (
            <StoreCard key={product.id} product={product} />
          ))}

      </div>
{/*         <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 bg-white">
          {product && product.map((product) => (
            <span key={product.id} 
                  className="group border border-gray-400 rounded shadow-fuchsia-950 shadow-md p-5"
                  >
              <img
                alt={product.imageAlt}
                src={product.imageSrc} 
                
                className="aspect-square w-full rounded-lg object-cover bg-gray-300 group-hover:opacity-75 xl:aspect-7/8"
              ></img>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
              <span className="m-3">

                <button 
                  id="heroBtn"
                  className="p-1 rounded-sm">
                    <a 
                      id="homeButton"
                      href="#"
                      >
                      Details
                    </a>
                </button>

                </span>
              <span>
              
                <button 
                  onClick={() => addToCart}
                  id="heroBtn"
                  className="p-1 rounded-sm">
                      Add to Cart
                </button>

              </span>
            </span>
          ))}
        </div>  */}
      </div>
    </div>
  )
}

export default Shop;