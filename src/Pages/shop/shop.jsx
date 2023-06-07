import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from '../product';
import './shop.css';

export const Shop = () => {
  return (
    <div className="shopTitle">
      <h1>Best shop for your needs.</h1>
      <div className="products">
        {PRODUCTS.map((item) => (
          <Product data={item} />
        ))}
      </div>
    </div>
  );
};
