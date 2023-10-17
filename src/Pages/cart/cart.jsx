import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shopContext";
import { CartItem } from "./cartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const [amount, setAmount] = useState(getTotalCartAmount);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cartTitle">
        <h1>Your Cart Items</h1>
      </div>
      <div>
        {PRODUCTS.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CartItem data={item} />;
          }
        })}
      </div>
      {amount > 0 ? (
        <div className="checkout">
          <p>Subtotal : ${amount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Check Out.</button>
        </div>
      ) : (
        <h1>Your Cart Is Empty !</h1>
      )}
    </div>
  );
};
