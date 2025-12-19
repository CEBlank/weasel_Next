import { create } from "zustand"; //maybe this gets me out of useState client-side pain?
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";

import { product, ProductType } from 'app/lib/products'

interface CartItem {
  id: number,
  name: string,
  price: number,
  quantity: number,
  image: string,
  imageAlt: string,
  };

interface CartState {
  items: CartItem [],
  activeItem: (product: ProductType) => void;
  addToCart: (product: ProductType) => void;
  removeFromCart: (id: number) => void;
  updateQty: (type: "increment" | "decrement", id: number) => void;
}

//add and remove items
const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product) => {
        const existingProduct = get().items.find(
          (item) => item.id === product.id
        );
        //console.log("added to cart: ", product);
        set({          
          items: existingProduct
            ? get().items
            : [
                ...get().items,
                {
                  quantity: 1,
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.imageSrc,
                  imageAlt: product.imageAlt,
                },
              ],
        });
        if (existingProduct) {
          toast.error("Product Already exists");
        } else {
          toast.success("Product Added successfully");
        }
      },

      //not a function? But coded to match the rest of the functions?
      activeItem: (product) => {
        set({
          items: get().items.filter((item) => item.id === product.id),
        });
        toast.success("Viewing Item");
      },

      removeFromCart: (id) => {
        set({
          items: get().items.filter((item) => item.id !== id),
        });
        toast.success("Item removed");
      },

      updateQty: (type, id) => {
        const item = get().items.find((item) => item.id === id);
        if (!item) {
          return;
        }
        if (item.quantity === 1 && type === "decrement") {
          get().removeFromCart(id);
        } else {
          item.quantity =
            type === "decrement" ? item.quantity - 1 : item.quantity + 1;
          set({
            items: [...get().items],
          });
          //console.log("removed from cart: ", item )
        }
      },
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
