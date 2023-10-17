import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";
import { ShopContext } from "../context/shopContext";

export const Navbar = () => {
  const { cartCount } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <div className="cart-icon-wrapper">
            <ShoppingCart size={32} />
            <div className="cart-icon">
              <span>{cartCount()}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
