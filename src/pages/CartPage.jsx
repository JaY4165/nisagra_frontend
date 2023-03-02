import React from "react";
import CartCard from "../components/cartcomponents/CartCard";
import CartCheckoutCard from "../components/cartcomponents/CartCheckoutCard";
import "../css/CartPage.css";

const Cart = () => {
  return (
    <div className="h-screen pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="p-5 sm:p-10 md:pl-20 lg:pl-44 md:flex gap-14">
        <div className="grid grid-cols-1">
          <CartCard />
        </div>
        <CartCheckoutCard />
      </div>
    </div>
  );
};

export default Cart;
