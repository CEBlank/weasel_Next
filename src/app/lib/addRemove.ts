"use client"

import { Product, productsType } from "./products";



export default function addItem() {

  //eeeeew, its a LET!
  let cartItem = [];

  if(localStorage.getItem('cartItem')){
    cartItem = JSON.parse(localStorage.getItem('cartItem'))
  }
  cartItem.push({'itemId' : + 1});
  localStorage.setItem('cartItem', JSON.stringify(cartItem));

  console.log(cartItem);

}