import { products } from "app/lib/products";

const Shop = () => {


  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 bg-white">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 bg-white">
          {products.map((product) => (
            <span key={product.id} 
                  className="group"
                  >
              <img
                alt={product.imageAlt}
                src={product.imageSrc} 
                className="aspect-square w-full rounded-lg object-cover bg-gray-300 group-hover:opacity-75 xl:aspect-7/8"
              ></img>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shop;