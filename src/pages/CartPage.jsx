import React from "react";
import CartCard from "../components/cartcomponents/CartCard";
import CartCheckoutCard from "../components/cartcomponents/CartCheckoutCard";
import "../css/CartPage.css";

const Cart = () => {
  return (
    <section className="h-screen w-screen overflow-x-hidden">
      <div className="h-screen pt-20">
        <h1 className="mb-10 text-center text-2xl font-semibold font-sans">
          Cart Items
        </h1>
        <div className="mx-auto max-w-6xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            <CartCard />
          </div>
          <CartCheckoutCard />
        </div>
      </div>
    </section>
  );
};

export default Cart;
