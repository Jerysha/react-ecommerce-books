import React from "react";
import emptyShopping from "../images/emptyShopping.png";

const Cart = () => {
  const show = true;

  return (
    <main className="main_cart">
        <h1>Cart</h1>
      <div className="main_cart_calc">
        <h2>Book</h2>
        <h2>Quantity</h2>
        <h2>Price</h2>
      </div>
      <div className="main_cart_items">
          <img src={emptyShopping} alt="No items in cart" className="main_cart_img"/>
          <h1>You don't have any books in your cart!</h1>
      </div>
      <button className="header_btn">Browse books</button>
    </main>
  );
};

export default Cart;
