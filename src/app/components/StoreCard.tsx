"use client";

import { ProductType } from "app/lib/products";
import useCartStore from "./cartLogic";
import ProductDetails from "./productDetails";

export function StoreCard({ product }: { product: ProductType }) {

  const addToCart = useCartStore((state) => state.addToCart);

  return (

    <div className="card">
      <span key={product.id} 
        className="group border border-gray-400 rounded shadow-fuchsia-950 shadow-md p-5"
        >
        <span>
          <h2 className="mt-4 text-gray-700">{product.name}</h2>
        </span>
        <img
          alt={product.imageAlt}
          src={product.imageSrc} 
          className="aspect-square w-full rounded-lg object-cover bg-gray-300 group-hover:opacity-75 xl:aspect-7/8"
        ></img>

        <p className="mb-2 text-sm text-gray-700">
          Brand: {product.Brand}
        </p>

        <p className="mb-2 text-sm text-gray-700">
          Published by: {product.Publisher}
        </p>

        <p className="mb-2 text-sm text-gray-700">
          Product Type: {product.group}
        </p>

        <p className="mt-1 text-lg font-medium text-gray-900">
          ${product.price.toFixed(2)}
        </p>
        
        <div>
        <span className="m-3">
          <ProductDetails key={product.id} product={product} />

          <button 
          id="cartBtn"
          onClick={() => addToCart(product)} 
          className="p-1 mt-2 rounded-sm hover:bg-violet-700 focus:outline-2 focus:outline-offset-2 focus:outline-fuchsia-700">
            Add to Cart
          </button>
        </span>
        </div>
        </span>
    </div>
  );
}