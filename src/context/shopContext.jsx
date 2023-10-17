import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  PRODUCTS.forEach((element) => {
    cart[element.id] = 0;
  });
  return cart;
  /* cart = {
     10 : 1,
     20 : 2,
     30 : 0,
     40 : 0,
     50 : 0 
  } */
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const emptyCart = () => {
    setCartItems(getDefaultCart());
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = {};
        for (let i = 0; i < PRODUCTS.length; i++) {
          if (Number(item) === PRODUCTS[i].id) {
            itemInfo = PRODUCTS[i];
            break;
          }
        }
        // let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        console.log(itemInfo);
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const cartCount = () => {
    let count = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        count++;
      }
    }
    return count;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    emptyCart,
    cartCount,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
