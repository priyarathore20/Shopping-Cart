import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shopContext";
import { CartItem } from "./cartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, emptyCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const handleCheckout = () => {
    emptyCart();
    alert("Your order has been placed");
    navigate("/");
  };

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
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal : ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button onClick={handleCheckout}>Check Out.</button>
        </div>
      ) : (
        <h1>Your Cart Is Empty !</h1>
      )}
    </div>
  );
};
