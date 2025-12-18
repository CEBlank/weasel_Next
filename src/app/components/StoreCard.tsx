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
        <img
          alt={product.imageAlt}
          src={product.imageSrc} 
          className="aspect-square w-full rounded-lg object-cover bg-gray-300 group-hover:opacity-75 xl:aspect-7/8"
        ></img>

        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">${product.price.toFixed(2)}</p>
        
        <span className="m-3">
          <ProductDetails key={product.id} product={product} />
        </span>

        <span>
          <button 
          id="heroBtn"
          onClick={() => addToCart(product)} 
          className="p-1 rounded-sm">
            Add to Cart
          </button>
        </span>

        </span>
    </div>
  );
}