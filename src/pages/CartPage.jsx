import React from "react";

import CartCards from "../components/cartcomponents/CartCards";

const Cart = () => {
  return (
    <section className="h-screen w-full">
      <div className="h-40 w-full p-">
        <h1 className="text-white text-4xl font-light uppercase">Shopping</h1>
      </div>
      <div className="grid grid-cols-12 h-screen w-full pt-24 p-20">
        <div className="col-span-9">
          <CartCards />
        </div>
        <div className="col-span-3"></div>
      </div>
    </section>
  );
};

export default Cart;
